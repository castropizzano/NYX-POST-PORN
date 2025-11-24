import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { ArrowLeft } from 'lucide-react';

const passwordSchema = z.object({
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast({
          title: 'Sessão inválida',
          description: 'Por favor, solicite um novo link de recuperação.',
          variant: 'destructive',
        });
        navigate('/auth');
      }
    };
    checkSession();
  }, [navigate, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = passwordSchema.safeParse({ password, confirmPassword });
    if (!validation.success) {
      toast({
        title: 'Erro de validação',
        description: validation.error.errors[0].message,
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: validation.data.password,
      });

      if (error) throw error;

      toast({
        title: 'Senha atualizada!',
        description: 'Sua senha foi alterada com sucesso. Redirecionando...',
      });

      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error: any) {
      toast({
        title: 'Erro',
        description: error.message || 'Ocorreu um erro. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-nyx-cream flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <Button
          onClick={() => navigate('/auth')}
          variant="outline"
          className="border-nyx-gold text-nyx-gold hover:bg-nyx-gold hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Login
        </Button>

        <div className="text-center space-y-2">
          <h1 className="nyx-h2">
            Nova Senha
          </h1>
          <p className="nyx-small text-nyx-gold">
            Digite sua nova senha abaixo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="password"
              placeholder="Nova Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="bg-black border-nyx-gold text-nyx-cream placeholder:text-nyx-gold/50"
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Confirmar Nova Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={isLoading}
              className="bg-black border-nyx-gold text-nyx-cream placeholder:text-nyx-gold/50"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-nyx-gold text-black hover:bg-nyx-gold-hover"
          >
            {isLoading ? 'Atualizando...' : 'Atualizar Senha'}
          </Button>
        </form>

        <div className="mt-8 p-4 bg-nyx-gold/5 border border-nyx-gold/20">
          <p className="nyx-small text-nyx-gold text-center">
            💡 Sua senha deve ter no mínimo 6 caracteres
          </p>
        </div>
      </div>
    </div>
  );
}
