-- Adicionar política RLS para permitir admins deletarem visitantes
CREATE POLICY "Admins can delete visitors"
ON public.age_gate_visitors
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));