import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.84.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limit configuration
const RATE_LIMIT_WINDOW_MINUTES = 60;
const MAX_SUBMISSIONS_PER_WINDOW = 3;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, userAgent } = await req.json();

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get IP address from request headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const ipAddress = forwardedFor?.split(',')[0].trim() || realIp || 'unknown';

    console.log(`Age gate submission attempt from IP: ${ipAddress}`);

    // Create Supabase client with service role key for rate limit checking
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check rate limit - count submissions from this IP in the last hour
    const windowStart = new Date();
    windowStart.setMinutes(windowStart.getMinutes() - RATE_LIMIT_WINDOW_MINUTES);

    const { data: recentSubmissions, error: checkError } = await supabase
      .from('age_gate_visitors')
      .select('id')
      .eq('ip_address', ipAddress)
      .gte('accessed_at', windowStart.toISOString());

    if (checkError) {
      console.error('Error checking rate limit:', checkError);
      throw checkError;
    }

    const submissionCount = recentSubmissions?.length || 0;
    
    if (submissionCount >= MAX_SUBMISSIONS_PER_WINDOW) {
      console.warn(`Rate limit exceeded for IP: ${ipAddress} (${submissionCount} submissions in last ${RATE_LIMIT_WINDOW_MINUTES} minutes)`);
      return new Response(
        JSON.stringify({ 
          error: 'Too many submissions. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW_MINUTES * 60 
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': String(RATE_LIMIT_WINDOW_MINUTES * 60)
          } 
        }
      );
    }

    // Insert the visitor record
    const { error: insertError } = await supabase
      .from('age_gate_visitors')
      .insert({
        email: email.trim().toLowerCase(),
        user_agent: userAgent,
        ip_address: ipAddress,
      });

    if (insertError) {
      console.error('Error inserting visitor:', insertError);
      throw insertError;
    }

    console.log(`Successfully recorded age gate submission for IP: ${ipAddress} (${submissionCount + 1}/${MAX_SUBMISSIONS_PER_WINDOW})`);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in submit-age-gate function:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your submission' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
