import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

interface AgeGateProps {
  isOpen: boolean;
  onVerify: () => void;
}

const emailSchema = z.string().email().trim().max(255);

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

    // Validação de email
    const emailValidation = emailSchema.safeParse(email);
    if (!emailValidation.success) {
      toast({
        title: language === 'pt' ? 'Email inválido' : 'Invalid email',
        description: language === 'pt' ? 'Por favor, insira um email válido.' : 'Please enter a valid email.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Salvar no banco de dados
      const { error } = await supabase
        .from('age_gate_visitors')
        .insert({
          email: emailValidation.data,
          user_agent: navigator.userAgent,
        });

      if (error) throw error;

      // Sucesso: permitir acesso
      onVerify();
    } catch (error) {
      console.error('Error saving visitor:', error);
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
        className="sm:max-w-md bg-black border border-nyx-gold text-nyx-cream rounded-none"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2 text-sm">
          <button
            onClick={() => setLanguage('pt')}
            className={`transition-colors ${
              language === 'pt' ? 'text-nyx-cream' : 'text-nyx-gold hover:text-nyx-cream'
            }`}
          >
            PT
          </button>
          <span className="text-nyx-gold">|</span>
          <button
            onClick={() => setLanguage('en')}
            className={`transition-colors ${
              language === 'en' ? 'text-nyx-cream' : 'text-nyx-gold hover:text-nyx-cream'
            }`}
          >
            EN
          </button>
        </div>

        <div className="space-y-6 p-6">
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
              className="w-full bg-nyx-gold hover:bg-nyx-gold-hover text-nyx-cream nyx-small rounded-none transition-all duration-200 disabled:bg-nyx-gold/30 disabled:text-nyx-gold/50 disabled:cursor-not-allowed"
            >
              {isSubmitting 
                ? (language === 'pt' ? 'Processando...' : 'Processing...') 
                : t.enterButton
              }
            </Button>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 accent-nyx-gold"
                required
                disabled={isSubmitting}
              />
              <span className="nyx-small text-justify">{t.confirmText}</span>
            </label>

            <p className="nyx-small text-center">{t.ageWarning}</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
