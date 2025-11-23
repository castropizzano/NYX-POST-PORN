import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, RefreshCw, ArrowLeft, Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { logError } from '@/lib/logger';

interface Visitor {
  id: string;
  email: string;
  accessed_at: string;
  user_agent: string | null;
}

export function VisitorsDashboard() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingPermissions, setCheckingPermissions] = useState(true);
  const [emailFilter, setEmailFilter] = useState('');
  const [userAgentFilter, setUserAgentFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const checkAdminRole = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setIsAdmin(false);
        return;
      }

      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        logError('Dashboard:checkAdminRole', error);
        setIsAdmin(false);
        return;
      }

      setIsAdmin(!!roles);
    } catch (error) {
      logError('Dashboard:checkAdminRole:catch', error);
      setIsAdmin(false);
    } finally {
      setCheckingPermissions(false);
    }
  };

  const fetchVisitors = async () => {
    try {
      const { data, error } = await supabase
        .from('age_gate_visitors')
        .select('*')
        .order('accessed_at', { ascending: false });

      if (error) {
        // Se erro for de permissão, mostrar mensagem específica
        if (error.message.includes('row-level security')) {
          toast({
            title: 'Acesso negado',
            description: 'Você precisa ser administrador para visualizar visitantes.',
            variant: 'destructive',
          });
          return;
        }
        throw error;
      }
      setVisitors(data || []);
    } catch (error) {
      logError('Dashboard:fetchVisitors', error);
      toast({
        title: 'Erro ao carregar visitantes',
        description: 'Não foi possível carregar a lista de visitantes.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    checkAdminRole();
  }, []);

  useEffect(() => {
    if (!checkingPermissions && isAdmin) {
      fetchVisitors();
    }
  }, [checkingPermissions, isAdmin]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchVisitors();
  };

  const exportToCSV = () => {
    if (visitors.length === 0) {
      toast({
        title: 'Nenhum dado para exportar',
        description: 'Não há visitantes registrados ainda.',
        variant: 'destructive',
      });
      return;
    }

    const headers = ['Email', 'Data de Acesso', 'Navegador'];
    const rows = visitors.map(v => [
      v.email,
      new Date(v.accessed_at).toLocaleString('pt-BR'),
      v.user_agent || 'N/A'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `nyx-visitors-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    toast({
      title: 'Exportação concluída',
      description: `${visitors.length} visitantes exportados com sucesso.`,
    });
  };

  // Filter visitors based on search criteria
  const filteredVisitors = visitors.filter(visitor => {
    const emailMatch = visitor.email.toLowerCase().includes(emailFilter.toLowerCase());
    const userAgentMatch = !userAgentFilter || (visitor.user_agent?.toLowerCase().includes(userAgentFilter.toLowerCase()) ?? false);
    const dateMatch = !dateFilter || new Date(visitor.accessed_at).toLocaleDateString('pt-BR').includes(dateFilter);
    return emailMatch && userAgentMatch && dateMatch;
  });

  const uniqueEmails = new Set(visitors.map(v => v.email)).size;
  const hasActiveFilters = emailFilter || userAgentFilter || dateFilter;

  const clearFilters = () => {
    setEmailFilter('');
    setUserAgentFilter('');
    setDateFilter('');
  };

  if (checkingPermissions) {
    return (
      <div className="min-h-screen bg-black text-nyx-cream flex items-center justify-center">
        <p className="nyx-small text-nyx-gold">Verificando permissões...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-black text-nyx-cream py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-nyx-gold text-nyx-gold hover:bg-nyx-gold hover:text-black mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Site
          </Button>

          <div className="p-12 bg-nyx-gold/5 border border-nyx-gold/20 text-center space-y-6">
            <h2 className="nyx-h2 text-nyx-gold">Acesso Negado</h2>
            <p className="nyx-small">
              Você precisa ser <span className="text-nyx-gold font-semibold">administrador</span> para acessar o dashboard de visitantes.
            </p>
            <div className="bg-black/30 p-6 border border-nyx-gold/30">
              <p className="nyx-small text-nyx-cream/80 text-center">
                Entre em contato com o administrador do sistema para solicitar acesso administrativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-nyx-cream py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-nyx-gold text-nyx-gold hover:bg-nyx-gold hover:text-black"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Site
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="nyx-h2 mb-2">Dashboard de Visitantes</h1>
              <p className="nyx-small text-nyx-gold">
                Total: {visitors.length} acessos | {uniqueEmails} emails únicos
                {hasActiveFilters && ` | Exibindo: ${filteredVisitors.length}`}
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleRefresh}
                disabled={isRefreshing}
                variant="outline"
                className="border-nyx-gold text-nyx-gold hover:bg-nyx-gold hover:text-black"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Atualizar
              </Button>

              <Button
                onClick={exportToCSV}
                className="bg-nyx-gold text-black hover:bg-nyx-gold-hover"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar CSV
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 p-4 bg-nyx-gold/5 border border-nyx-gold/20 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-nyx-gold">
              <Search className="w-4 h-4" />
              <span className="nyx-small font-semibold">Filtros de Busca</span>
            </div>
            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                variant="ghost"
                size="sm"
                className="text-nyx-gold hover:text-nyx-cream hover:bg-nyx-gold/10"
              >
                <X className="w-4 h-4 mr-1" />
                Limpar Filtros
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="nyx-xs text-nyx-gold/70 mb-2 block">Email</label>
              <Input
                placeholder="Buscar por email..."
                value={emailFilter}
                onChange={(e) => setEmailFilter(e.target.value)}
                className="bg-black border-nyx-gold/30 text-nyx-cream placeholder:text-nyx-gold/50 focus:border-nyx-gold"
              />
            </div>
            
            <div>
              <label className="nyx-xs text-nyx-gold/70 mb-2 block">Navegador</label>
              <Input
                placeholder="Buscar por navegador..."
                value={userAgentFilter}
                onChange={(e) => setUserAgentFilter(e.target.value)}
                className="bg-black border-nyx-gold/30 text-nyx-cream placeholder:text-nyx-gold/50 focus:border-nyx-gold"
              />
            </div>
            
            <div>
              <label className="nyx-xs text-nyx-gold/70 mb-2 block">Data</label>
              <Input
                placeholder="DD/MM/AAAA"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-black border-nyx-gold/30 text-nyx-cream placeholder:text-nyx-gold/50 focus:border-nyx-gold"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border border-nyx-gold/20 bg-nyx-gold/5 overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center">
              <p className="nyx-small text-nyx-gold">Carregando visitantes...</p>
            </div>
          ) : filteredVisitors.length === 0 ? (
            <div className="p-12 text-center">
              <p className="nyx-small text-nyx-gold">
                {hasActiveFilters 
                  ? 'Nenhum visitante encontrado com os filtros aplicados.' 
                  : 'Nenhum visitante registrado ainda.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-nyx-gold/20">
                  <tr>
                    <th className="text-left p-4 nyx-small font-semibold text-nyx-gold">#</th>
                    <th className="text-left p-4 nyx-small font-semibold text-nyx-gold">Email</th>
                    <th className="text-left p-4 nyx-small font-semibold text-nyx-gold">Data de Acesso</th>
                    <th className="text-left p-4 nyx-small font-semibold text-nyx-gold">Navegador</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVisitors.map((visitor, index) => (
                    <tr 
                      key={visitor.id} 
                      className="border-b border-nyx-gold/10 hover:bg-nyx-gold/10 transition-colors"
                    >
                      <td className="p-4 nyx-small">{index + 1}</td>
                      <td className="p-4 nyx-small font-medium">{visitor.email}</td>
                      <td className="p-4 nyx-small">
                        {new Date(visitor.accessed_at).toLocaleString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="p-4 nyx-small text-nyx-gold/70 max-w-xs truncate">
                        {visitor.user_agent || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 p-6 bg-nyx-gold/5 border border-nyx-gold/20">
          <h3 className="nyx-small font-semibold text-nyx-gold mb-3">
            ℹ️ Informações Importantes
          </h3>
          <p className="nyx-small text-nyx-cream/80 leading-relaxed">
            Os dados são coletados automaticamente quando visitantes acessam o Age Gate. Todos os emails são armazenados com segurança e protegidos por RLS (Row Level Security). Use o botão "Exportar CSV" para baixar a lista completa para newsletters. Para acessar este dashboard, você precisa estar autenticado no sistema.
          </p>
        </div>
      </div>
    </div>
  );
}