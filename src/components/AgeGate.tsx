import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { logError } from '@/lib/logger';

interface AgeGateProps {
  isOpen: boolean;
  onVerify: () => void;
}

const ageGateSchema = z.object({
  email: z.string().email().trim().max(255),
  userAgent: z.string().max(500).optional(),
});

export default function AgeGate({ isOpen, onVerify }: AgeGateProps) {
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const t = translations[language].ageGate;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed || !email) return;

    // Validação completa
    const validation = ageGateSchema.safeParse({
      email,
      userAgent: navigator.userAgent,
    });

    if (!validation.success) {
      toast({
        title: language === 'pt' ? 'Dados inválidos' : 'Invalid data',
        description: language === 'pt' ? 'Por favor, verifique os dados inseridos.' : 'Please check the data entered.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Call edge function with rate limiting
      const { data, error } = await supabase.functions.invoke('submit-age-gate', {
        body: {
          email: validation.data.email,
          userAgent: validation.data.userAgent,
        },
      });

      if (error) {
        // Handle rate limit error specifically
        if (error.message?.includes('Too many submissions') || error.message?.includes('429')) {
          toast({
            title: language === 'pt' ? 'Limite excedido' : 'Rate limit exceeded',
            description: language === 'pt' 
              ? 'Você fez muitas tentativas. Por favor, aguarde antes de tentar novamente.' 
              : 'Too many attempts. Please wait before trying again.',
            variant: 'destructive',
          });
          return;
        }
        throw error;
      }

      if (!data?.success) {
        throw new Error('Submission failed');
      }

      // Sucesso: permitir acesso
      onVerify();
    } catch (error) {
      logError('AgeGate:submit', error);
      toast({
        title: language === 'pt' ? 'Erro' : 'Error',
        description: language === 'pt' 
          ? 'Ocorreu um erro ao processar seu acesso. Tente novamente.' 
          : 'An error occurred while processing your access. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-md bg-black border border-nyx-gold text-nyx-cream rounded-none max-h-[90vh] overflow-y-auto"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute top-4 left-4 flex items-center gap-2 text-xs md:text-sm z-10">
          <button
            onClick={() => setLanguage('pt')}
            className={`transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${
              language === 'pt' ? 'text-nyx-cream' : 'text-nyx-gold hover:text-nyx-cream'
            }`}
          >
            PT
          </button>
          <span className="text-nyx-gold">|</span>
          <button
            onClick={() => setLanguage('en')}
            className={`transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center ${
              language === 'en' ? 'text-nyx-cream' : 'text-nyx-gold hover:text-nyx-cream'
            }`}
          >
            EN
          </button>
        </div>

        <div className="space-y-4 md:space-y-6 p-4 md:p-6 pt-14 md:pt-6">
          <div className="space-y-2 text-center">
            <h2 className="nyx-h2">{t.title}</h2>
            <p className="nyx-xs">{t.subtitle}</p>
          </div>

          <div className="space-y-4">
            <p className="nyx-small text-justify">{t.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="bg-black border-nyx-gold text-nyx-cream placeholder:text-nyx-gold/50 rounded-none"
              />
            </div>

            <Button
              type="submit"
              disabled={!confirmed || !email || isSubmitting}
              className="w-full bg-nyx-gold hover:bg-nyx-gold-hover text-black nyx-small rounded-none transition-all duration-200 disabled:bg-nyx-gold/30 disabled:text-nyx-gold/70 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] touch-manipulation"
            >
              {isSubmitting 
                ? (language === 'pt' ? 'Processando...' : 'Processing...') 
                : t.enterButton
              }
            </Button>

            <label className="flex items-start gap-3 cursor-pointer touch-manipulation">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 accent-nyx-gold min-w-[20px] min-h-[20px]"
                required
                disabled={isSubmitting}
              />
              <span className="nyx-small text-justify">
                {t.confirmText}{' '}
                <a 
                  href="/privacy" 
                  target="_blank"
                  className="text-nyx-gold hover:text-nyx-cream underline transition-colors touch-manipulation"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.privacyLink}
                </a>
              </span>
            </label>

            <p className="nyx-small text-center">{t.ageWarning}</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
