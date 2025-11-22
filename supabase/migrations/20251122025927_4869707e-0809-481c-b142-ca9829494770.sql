-- Tabela para armazenar visitantes do Age Gate
CREATE TABLE IF NOT EXISTS public.age_gate_visitors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  accessed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  ip_address TEXT
);

-- Índice para busca por email e ordenação por data
CREATE INDEX idx_age_gate_visitors_email ON public.age_gate_visitors(email);
CREATE INDEX idx_age_gate_visitors_accessed_at ON public.age_gate_visitors(accessed_at DESC);

-- Habilitar RLS (CRÍTICO: contém PII - emails)
ALTER TABLE public.age_gate_visitors ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT anônimo (para visitantes não autenticados)
CREATE POLICY "Anyone can register their visit"
ON public.age_gate_visitors
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Política: Apenas usuários autenticados podem ver a lista (dashboard admin)
-- IMPORTANTE: Esta política será expandida quando houver sistema de roles
CREATE POLICY "Authenticated users can view all visitors"
ON public.age_gate_visitors
FOR SELECT
TO authenticated
USING (true);

-- Sem políticas de UPDATE/DELETE: visitantes não podem modificar/deletar registros