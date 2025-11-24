import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { ArrowLeft } from 'lucide-react';

const authSchema = z.object({
  email: z.string().email('Email inválido').trim().max(255),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };
    checkAuth();
  }, [navigate]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: 'Email necessário',
        description: 'Por favor, digite seu email.',
        variant: 'destructive',
      });
      return;
    }

    const emailValidation = z.string().email('Email inválido').safeParse(email);
    if (!emailValidation.success) {
      toast({
        title: 'Email inválido',
        description: 'Por favor, digite um email válido.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      toast({
        title: 'Email enviado!',
        description: 'Verifique sua caixa de entrada para redefinir sua senha.',
      });
      
      setIsForgotPassword(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isForgotPassword) {
      await handlePasswordReset(e);
      return;
    }

    const validation = authSchema.safeParse({ email, password });
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
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email: validation.data.email,
          password: validation.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
          },
        });

        if (error) throw error;

        toast({
          title: 'Conta criada!',
          description: 'Verifique seu email para confirmar a conta.',
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: validation.data.email,
          password: validation.data.password,
        });

        if (error) throw error;

        navigate('/dashboard');
      }
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
          onClick={() => navigate('/')}
          variant="outline"
          className="border-nyx-gold text-nyx-gold hover:bg-nyx-gold hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Site
        </Button>

        <div className="text-center space-y-2">
          <h1 className="nyx-h2">
            {isForgotPassword ? 'Recuperar Senha' : (isSignUp ? 'Criar Conta' : 'Login')}
          </h1>
          <p className="nyx-small text-nyx-gold">
            {isForgotPassword 
              ? 'Digite seu email para receber instruções' 
              : 'Acesse o dashboard de visitantes'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="bg-black border-nyx-gold text-nyx-cream placeholder:text-nyx-gold/50"
            />
          </div>

          {!isForgotPassword && (
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="bg-black border-nyx-gold text-nyx-cream placeholder:text-nyx-gold/50"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-nyx-gold text-black hover:bg-nyx-gold-hover"
          >
            {isLoading 
              ? 'Processando...' 
              : (isForgotPassword ? 'Enviar Email' : (isSignUp ? 'Criar Conta' : 'Entrar'))
            }
          </Button>

          {!isForgotPassword && (
            <>
              <button
                type="button"
                onClick={() => setIsForgotPassword(true)}
                disabled={isLoading}
                className="w-full nyx-small text-nyx-gold hover:text-nyx-cream transition-colors"
              >
                Esqueci minha senha
              </button>

              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                disabled={isLoading}
                className="w-full nyx-small text-nyx-gold hover:text-nyx-cream transition-colors"
              >
                {isSignUp 
                  ? 'Já tem conta? Faça login' 
                  : 'Não tem conta? Crie uma'
                }
              </button>
            </>
          )}

          {isForgotPassword && (
            <button
              type="button"
              onClick={() => setIsForgotPassword(false)}
              disabled={isLoading}
              className="w-full nyx-small text-nyx-gold hover:text-nyx-cream transition-colors"
            >
              Voltar ao login
            </button>
          )}
        </form>

        <div className="mt-8 p-4 bg-nyx-gold/5 border border-nyx-gold/20">
          <p className="nyx-small text-nyx-gold text-center">
            ⚠️ Apenas administradores autorizados devem criar contas
          </p>
        </div>
      </div>
    </div>
  );
}