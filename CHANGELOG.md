---
Project: NYX-POST-PORN - Corpo Expandido
Type: Changelog
Version: 1.3.0
Last Update: 2025-11-23
---

# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.3.0] - 2025-11-23

### 🎭 Artístico

#### Adicionado
- ✨ Website oficial lançado com design cinematográfico dark
- 🎬 Filme completo integrado (35min, 1920x1080, H.264)
- 🎵 Trilha sonora original "Non-Grata" por Dan Guinski
- 🖼️ 6 posters artísticos exclusivos em alta resolução
- 📹 Trailer oficial (2min) com preview da experiência
- 📹 Making-of multicam mostrando processo criativo
- 🎨 Sistema de design único inspirado em cinema experimental
- 🌙 Logo e identidade visual "NYX" dark/gold

### 🔒 Segurança e Privacidade

#### Adicionado
- 🔞 Age Gate ético com consentimento informado LGPD/GDPR
- 🛡️ Rate limiting: 3 submissões por hora por IP
- 🔐 Row Level Security (RLS) em todas as tabelas Supabase
- 👥 Sistema RBAC (Role-Based Access Control):
  - `admin` - Acesso total
  - `moderator` - Moderação de conteúdo
  - `user` - Acesso básico
- 📊 Dashboard administrativo protegido por autenticação
- 🔒 Edge Function para validação server-side de submissões
- 🛡️ Proteção contra SQL injection e XSS
- 📝 Logs de acesso anonimizados para análise acadêmica

#### Segurança
- Validação de email em frontend e backend
- Hash seguro de IP addresses para análise
- Headers de segurança configurados (CORS, CSP)
- HTTPS enforced em produção

### 📚 Documentação

#### Adicionado
- 📖 README.md como manifesto artístico-acadêmico completo
- 🔒 SECURITY.md contextualizado eticamente
- 🎓 CONCEPT.md com fundamentação teórica:
  - Laura Mulvey - Male Gaze e prazer visual
  - Jean-Louis Comolli - Ver e Poder
  - Luciano Vinhosa - Videoperformance
  - Adriana Azevedo - Sexorcismos
- 🏛️ ACADEMIC.md com contexto institucional UNESPAR/PPG-CINEAV
- 🎪 EXHIBITION.md com histórico de exibições e certificações
- 🤝 CONTRIBUTING.md com guidelines para colaboradores
- 📜 LICENSE.md com licença dual (CC BY-NC-SA 4.0 + MIT)
- 📋 CITATION.cff para citação acadêmica padronizada
- 📝 CHANGELOG.md (este arquivo)

### 🌐 Funcionalidades do Website

#### Adicionado
- 🌍 Interface bilíngue completa (Português/English)
- 📱 Design 100% responsivo (mobile, tablet, desktop)
- ♿ Acessibilidade WCAG 2.1 AA:
  - Navegação por teclado
  - ARIA labels
  - Alt text em todas as imagens
  - Contraste adequado
- 🎨 Design system consistente com tokens CSS
- ⚡ Performance otimizada:
  - Lazy loading de imagens
  - Code splitting
  - Otimização de bundle
- 🔗 Navegação fluida SPA (sem page reloads)
- 🎯 Smooth scroll e animações sutis
- 📧 Footer com links institucionais
- 🔝 Botão "Voltar ao Topo"
- 🎵 Player de áudio integrado para trilha sonora

#### Componentes
- `<AgeGate />` - Portal de entrada com validação
- `<Hero />` - Seção hero cinematográfica
- `<Synopsis />` - Sinopse expandida bilíngue
- `<FilmPlayer />` - Player de vídeo customizado
- `<Concept />` - Conceito artístico expandido
- `<Process />` - Processo criativo dos 6 momentos
- `<Posters />` - Galeria de posters artísticos
- `<VisualReferences />` - Referências visuais (Shame, Love, Destricted)
- `<References />` - Bibliografia acadêmica completa
- `<Filmmakers />` - Time de realização
- `<Credits />` - Créditos completos
- `<PrivacyPolicy />` - Política de privacidade LGPD/GDPR
- `<LanguageSwitcher />` - Alternador PT/EN
- `<BackToTop />` - Botão flutuante de retorno
- `<AudioPlayer />` - Player para trilha sonora
- `<FaccBadge />` - Badge de certificação FACC/UFRJ

### 🛠️ Stack Tecnológico

#### Frontend
- ⚛️ React 18.3.1 com TypeScript
- 🎨 Tailwind CSS 3.4.17 + @tailwindcss/typography
- 🧩 shadcn/ui + Radix UI (componentes acessíveis)
- 🔄 Framer Motion 12.23.24 (animações)
- 🚦 React Router 6.30.1 (navegação SPA)
- 📊 TanStack Query 5.83.0 (data fetching)
- 🎯 Vite 5.4.19 (build tool)
- 🎨 Class Variance Authority (variantes de componentes)
- 🔧 React Hook Form + Zod (validação de formulários)

#### Backend (Lovable Cloud / Supabase)
- 🗄️ Supabase 2.84.0 (PostgreSQL)
- 🔐 Supabase Auth (autenticação)
- ⚡ Edge Functions (Deno runtime)
- 📊 Row Level Security (RLS policies)
- 🔒 Rate limiting via banco de dados

#### DevOps
- 📦 Bun como package manager
- 🔍 ESLint + TypeScript ESLint
- 🚀 Deploy automático via Lovable Cloud
- 📈 Monitoring via Supabase Analytics

### 🎨 Design System

#### Cores (HSL Tokens)
- **Background:** `hsl(0, 0%, 7%)` - Preto profundo
- **Foreground:** `hsl(40, 45%, 85%)` - Creme suave
- **Primary:** `hsl(40, 70%, 55%)` - Ouro terroso
- **Accent:** `hsl(40, 60%, 65%)` - Dourado claro
- **Border:** `hsl(40, 20%, 25%)` - Contorno sutil

#### Tipografia
- **Heading:** Playfair Display (serifada, cinematográfica)
- **Body:** Inter (sans-serif, legibilidade)
- **Mono:** Fira Code (código/dados técnicos)

#### Gradientes
- **Hero:** `linear-gradient(to bottom, transparent, background)`
- **Cards:** `linear-gradient(135deg, primary/10, transparent)`

### 📊 Banco de Dados

#### Tabelas
- `age_gate_visitors` - Registros de acesso com consent
  - Campos: id, email, ip_address (hash), user_agent, accessed_at
  - RLS: Admin-only access
- `user_roles` - Sistema RBAC
  - Campos: id, user_id, role (enum: admin|moderator|user)
  - RLS: Self-read, admin-write

#### Edge Functions
- `submit-age-gate` - Validação e rate limiting de Age Gate

### 🎓 Contexto Acadêmico

#### Instituição
- **Universidade:** UNESPAR - Universidade Estadual do Paraná
- **Programa:** PPG-CINEAV - Pós-Graduação em Cinema e Artes do Vídeo
- **Grupo de Pesquisa:** CineCriare - Corpo e Movimento

#### Orientação
- Profa. Dra. Cristiane Wosniak (UNESPAR)
- Prof. Dr. Fábio Noronha (UNESPAR)

#### Equipe Realizadora (Mestrandos)
- Castro Pizzano - Idealização, Fotografia, Montagem
- Patrícia Ressureição - Direção Corporal
- Murilo Castro - Produção, Making-of
- Ana Pupo - Direção de Arte, Maquiagem
- Flávia Massali - Performance

### 🎪 Exibições

#### Certificações
- ✅ FACC/UFRJ - Faculdade de Comunicação da UFRJ (2024)
- ✅ CineCriare - Certificado de participação (2024)

### 🐛 Correções
- Nenhuma correção nesta versão inicial

### 📋 Tarefas Conhecidas
- [ ] Adicionar legendas/closed captions no vídeo
- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar analytics privacy-friendly
- [ ] Implementar sistema de comentários moderados
- [ ] Criar seção de imprensa com kit de mídia

---

## [1.0.0] - 2024-12-XX

### Adicionado
- Concepção inicial do projeto
- Filmagem das 6 performances
- Produção da trilha sonora "Non-Grata"
- Montagem final do filme
- Criação dos posters artísticos

---

## Tipos de Mudanças

- **Adicionado** - Novas funcionalidades
- **Modificado** - Mudanças em funcionalidades existentes
- **Descontinuado** - Recursos a serem removidos
- **Removido** - Recursos removidos
- **Corrigido** - Correções de bugs
- **Segurança** - Vulnerabilidades corrigidas

---

## Links Úteis

- [Website Oficial](https://nyxpostporn.com.br)
- [Repositório GitHub](https://github.com/[USERNAME]/nyx-post-porn-release)
- [Internet Archive](https://archive.org/details/nyx-post-porn-corpo-expandido)
- [Issues](https://github.com/[USERNAME]/nyx-post-porn-release/issues)

---

**Nota:** Este é um projeto artístico-acadêmico em desenvolvimento permanente.  
Feedbacks e contribuições são bem-vindos respeitando os princípios éticos do projeto.

**Contato:** contato@casatrezestudio.com
