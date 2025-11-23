---
Project: NYX-POST-PORN - Corpo Expandido
Type: CONTRIBUTING
Version: 1.3.0
Last Update: 2025-11-23
Institution: PPG-CINEAV/UNESPAR
Research Group: CineCriare
---

# Contribuindo com o Projeto

> *Guia para contribuições técnicas, acadêmicas e artísticas ao ecossistema NYX-POST-PORN*

---

## Índice

1. [Natureza do Projeto](#natureza-do-projeto)
2. [Tipos de Contribuições](#tipos-de-contribuições)
3. [Diretrizes Técnicas](#diretrizes-técnicas)
4. [Processo de Contribuição](#processo-de-contribuição)
5. [Código de Conduta](#código-de-conduta)
6. [Propriedade Intelectual](#propriedade-intelectual)
7. [Contato](#contato)

---

## Natureza do Projeto

**NYX-POST-PORN** é um **projeto artístico-acadêmico** de pesquisa em cinema experimental e videoperformance, desenvolvido no contexto do **PPG-CINEAV/UNESPAR** (Programa de Pós-Graduação em Cinema e Artes do Vídeo) pelo **Grupo de Pesquisa CineCriare**.

### Características Especiais

🎨 **Projeto Autoral**: Obra artística com identidade conceitual definida  
🎓 **Pesquisa Acadêmica**: Produto de investigação científica em artes  
🔒 **Conteúdo Protegido**: Audiovisual e textos artísticos com direitos autorais  
🌍 **Código Aberto**: Website com código-fonte educacional disponível  

Por ser um projeto com essas características específicas, contribuições são **bem-vindas** mas devem seguir diretrizes que preservem:
- **Integridade artística** da obra
- **Rigor acadêmico** da pesquisa
- **Ética** no tratamento de conteúdo adulto
- **Créditos** aos realizadores originais

---

## Tipos de Contribuições

### ✅ Contribuições Aceitas (Sem Aprovação Prévia)

Você pode contribuir livremente com:

#### **1. Melhorias Técnicas no Website**
- 🐛 **Correção de bugs** (erros de funcionamento, quebras de layout)
- ⚡ **Otimização de performance** (carregamento, responsividade, lazy loading)
- ♿ **Acessibilidade** (ARIA labels, navegação por teclado, contraste)
- 🌐 **Tradução** (novos idiomas além de PT/EN, correções de tradução)
- 📱 **Compatibilidade** (ajustes para navegadores/dispositivos específicos)

#### **2. Documentação Técnica**
- 📖 **Tutoriais** (guias de instalação, deployment, personalização)
- 💡 **Comentários no código** (explicações para desenvolvedores)
- 🛠️ **Scripts de automação** (build, testes, deploy)
- 📝 **README técnico** (melhorias na documentação de desenvolvimento)

#### **3. Infraestrutura e DevOps**
- 🐳 **Docker** (containerização do projeto)
- 🚀 **CI/CD** (pipelines de integração contínua)
- 🔒 **Segurança** (correção de vulnerabilidades, hardening)

#### **4. Testes**
- 🧪 **Testes unitários** (componentes React)
- 🎭 **Testes E2E** (fluxos completos, Age Gate, navegação)
- 📊 **Testes de acessibilidade** (axe, Lighthouse)

---

### ⚠️ Contribuições que Requerem Aprovação Prévia

Para preservar integridade artística, **consulte realizadores antes** de:

#### **1. Mudanças no Design Visual**
- 🎨 Alterações na paleta de cores (preto/ouro/creme)
- 🖼️ Mudanças no layout de seções principais
- ✨ Novos efeitos visuais ou animações
- 📐 Refatoração do design system

**Por quê?** O design reflete esteticamente o conceito NYX (noite/corpo) e foi cuidadosamente planejado.

#### **2. Alterações no Conteúdo Editorial**
- 📝 Mudanças em textos de sinopse, conceito, processo criativo
- 📚 Adição ou remoção de referências teóricas
- 🎬 Alteração da ordem de seções
- 📖 Modificações na Privacy Policy ou termos legais

**Por quê?** Textos são parte da proposta artística e base acadêmica da pesquisa.

#### **3. Funcionalidades que Afetam o Age Gate**
- 🔞 Mudanças no fluxo de verificação etária
- 📊 Alterações na coleta de dados (LGPD/GDPR compliance)
- 🛡️ Modificações no rate limiting ou segurança

**Por quê?** Age Gate é componente ético-legal crítico que protege visitantes e realizadores.

#### **4. Novos Recursos ou Seções**
- ➕ Adição de novas páginas ou funcionalidades
- 🔌 Integração com APIs externas
- 💬 Sistemas de comentários ou interação social

**Por quê?** Funcionalidades devem alinhar-se à proposta artística da obra.

---

### ❌ Contribuições Não-Aceitas

**Não serão aceitas contribuições que**:

#### **1. Modifiquem o Conteúdo Audiovisual**
- ❌ Edição dos vídeos (Official Cut, Multicam, Trailer)
- ❌ Alteração da trilha sonora
- ❌ Remoção ou adição de cenas

**Motivo**: O audiovisual é a obra artística protegida por direitos autorais.

#### **2. Alterem Créditos ou Autoria**
- ❌ Remoção ou modificação dos créditos dos realizadores
- ❌ Alteração dos nomes na ficha técnica
- ❌ Mudanças nos links de Lattes ou redes sociais

**Motivo**: Integridade acadêmica e reconhecimento de autoria.

#### **3. Descaracterizem a Proposta Artística**
- ❌ Transformação em site comercial ou plataforma de streaming
- ❌ Adição de publicidade ou monetização
- ❌ Remoção do Age Gate ou controles etários
- ❌ Mudanças que transformem pós-pornô em pornografia mainstream

**Motivo**: Preservação da identidade e propósito artístico-acadêmico.

#### **4. Violem Princípios Éticos**
- ❌ Uso desrespeitoso da imagem da performer
- ❌ Remoção de documentos de consentimento
- ❌ Distribuição em plataformas inadequadas (pornografia comercial)
- ❌ Uso que objetifique ou descontextualize o trabalho

**Motivo**: Compromisso ético com a performer e integridade do projeto.

---

## Diretrizes Técnicas

### Stack Tecnológico

```
Frontend:   React 18 + TypeScript + Vite
Styling:    Tailwind CSS + shadcn/ui + Framer Motion
Backend:    Supabase (PostgreSQL + Edge Functions)
Deployment: Lovable Cloud
```

### Estrutura do Código

```
src/
├── components/          # Componentes React
│   ├── ui/             # shadcn/ui components
│   ├── AgeGate.tsx     # Portal de entrada (+18)
│   ├── Hero.tsx        # Seção principal
│   └── ...
├── contexts/           # React Context (i18n)
├── lib/                # Utilitários
│   ├── translations.ts # Sistema bilíngue PT/EN
│   └── utils.ts        # Helpers
├── pages/              # Páginas principais
└── integrations/       # Supabase client
```

### Padrões de Código

#### **TypeScript**
```typescript
// ✅ BOM: Componentes tipados
interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return <section>...</section>;
}

// ❌ RUIM: Sem tipos
export function Hero(props) {
  return <section>...</section>;
}
```

#### **Componentes React**
```typescript
// ✅ BOM: Componente funcional com hooks
export function Component() {
  const [state, setState] = useState<string>('');
  
  useEffect(() => {
    // side effects
  }, []);
  
  return <div>{state}</div>;
}

// ❌ RUIM: Class components (evitar)
class Component extends React.Component { ... }
```

#### **Tailwind CSS**
```tsx
// ✅ BOM: Usar semantic tokens do design system
<div className="bg-background text-foreground border-accent" />

// ❌ RUIM: Cores hardcoded
<div className="bg-black text-white border-yellow-500" />
```

#### **Internacionalização (i18n)**
```typescript
// ✅ BOM: Usar sistema de traduções
const { language } = useLanguage();
const t = translations[language].section;
return <h1>{t.title}</h1>;

// ❌ RUIM: Texto hardcoded
return <h1>Título</h1>;
```

---

## Processo de Contribuição

### 1. Fork e Clone

```bash
# Fork no GitHub (botão "Fork")
# Clone seu fork localmente
git clone https://github.com/SEU-USUARIO/nyx-post-porn-release.git
cd nyx-post-porn-release

# Adicione o repositório original como upstream
git remote add upstream https://github.com/castrobreno/nyx-post-porn-release.git
```

### 2. Instale Dependências

```bash
# Com npm
npm install

# Ou com bun (recomendado)
bun install
```

### 3. Crie uma Branch

```bash
# Branch para nova feature
git checkout -b feature/nome-da-feature

# Branch para correção de bug
git checkout -b fix/descricao-do-bug

# Branch para documentação
git checkout -b docs/melhoria-na-doc
```

### 4. Faça as Mudanças

```bash
# Edite arquivos necessários
# Teste localmente
npm run dev  # ou: bun dev

# Acesse http://localhost:5173
```

### 5. Commit com Mensagens Claras

```bash
# Padrão Conventional Commits
git commit -m "feat: adiciona tradução em espanhol"
git commit -m "fix: corrige responsividade do Hero em mobile"
git commit -m "docs: atualiza instruções de instalação"
git commit -m "perf: otimiza lazy loading de imagens"
```

**Tipos de commit**:
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (não afeta código)
- `refactor`: Refatoração (não adiciona feature nem corrige bug)
- `perf`: Melhoria de performance
- `test`: Adiciona ou corrige testes
- `chore`: Tarefas de manutenção

### 6. Push e Pull Request

```bash
# Push para seu fork
git push origin feature/nome-da-feature
```

No GitHub:
1. Abra **Pull Request** do seu fork para o repositório original
2. Preencha o template de PR descrevendo mudanças
3. Aguarde review dos mantenedores

---

## Código de Conduta

### Princípios

Este projeto adota o [Contributor Covenant](https://www.contributor-covenant.org/) como código de conduta.

**Esperamos que todos os contribuidores**:

✅ **Respeitem a natureza artística do projeto**  
Este é um trabalho artístico sobre corpo e sexualidade. Contribuições devem ser respeitosas e alinhadas à proposta pós-pornográfica da obra.

✅ **Mantenham linguagem profissional**  
Discussões devem ser técnicas e respeitosas. Evite comentários desrespeitosos sobre o conteúdo, performers ou realizadores.

✅ **Reconheçam contextos culturais**  
Projeto brasileiro com referências à teoria feminista latino-americana. Contribuições devem considerar contexto cultural.

✅ **Protejam privacidade**  
Não compartilhe dados de visitantes (emails, IPs) ou informações sensíveis do projeto.

✅ **Contribuam de boa-fé**  
Contribuições devem melhorar o projeto, não descaracterizá-lo ou prejudicá-lo.

### Comportamentos Inaceitáveis

❌ Comentários sexualizados sobre performers ou realizadores  
❌ Uso desrespeitoso de imagens da obra fora de contexto artístico  
❌ Distribuição não-autorizada do conteúdo audiovisual  
❌ Tentativas de contornar o Age Gate ou segurança  
❌ Spam, trolling ou comportamento disruptivo  

**Violações serão tratadas com bloqueio e remoção de contribuições.**

---

## Propriedade Intelectual

### Conteúdo Artístico (©)

**Conteúdo audiovisual, textos artísticos e conceituais** são propriedade intelectual dos realizadores:
- Castro Pizzano
- Patrícia Ressureição
- Murilo Castro
- Ana Pupo
- Flávia Massali

**Uso**: Requer autorização expressa para fins além de educação/pesquisa.

### Código-Fonte (CC BY-NC-SA 4.0)

O **código-fonte do website** está licenciado sob [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](LICENSE.md).

**Você pode**:
- ✅ Usar para fins educacionais e de pesquisa
- ✅ Modificar e adaptar o código
- ✅ Distribuir modificações (com mesma licença)

**Sob condições**:
- 🔗 Atribuição (creditar autores originais)
- 🚫 Uso não-comercial
- 🔄 Compartilhar igual (mesma licença)

### Contribuições

Ao contribuir, você concorda que:
1. Suas contribuições serão licenciadas sob a mesma licença do projeto (CC BY-NC-SA 4.0)
2. Você tem direitos de autor sobre suas contribuições
3. Você cede direitos de uso aos mantenedores para integrar ao projeto

---

## Reconhecimento de Contribuidores

Contribuidores significativos serão reconhecidos em:
- 📝 Arquivo `CONTRIBUTORS.md` (em construção)
- 🎉 Créditos no website (seção específica)
- 🏆 Agradecimentos em publicações acadêmicas futuras (contribuições técnicas relevantes)

---

## Perguntas Frequentes (FAQ)

### ❓ Posso usar o código para meu próprio projeto artístico?

✅ **Sim**, desde que:
- Seja uso não-comercial
- Você credite os autores originais (NYX-POST-PORN)
- Distribua sob a mesma licença (CC BY-NC-SA 4.0)

### ❓ Posso propor mudanças radicais no design?

⚠️ **Com aprovação prévia**. Abra uma **issue** descrevendo a proposta antes de implementar. Mudanças no design refletem escolhas artísticas conceituais.

### ❓ Posso adicionar meu próprio conteúdo audiovisual?

❌ **Não**. O conteúdo audiovisual é obra artística fechada. Você pode criar **projetos derivados** (com créditos e licença correta), mas não adicionar ao projeto original.

### ❓ Como reporto bugs de segurança?

🔒 **Não abra issue pública**. Envie email para [castropizzano@gmail.com](mailto:castropizzano@gmail.com) com assunto "[SECURITY] Descrição". Veja [SECURITY.md](SECURITY.md) para detalhes.

### ❓ Posso traduzir para meu idioma?

✅ **Sim!** Traduções são muito bem-vindas. Veja `src/lib/translations.ts` e adicione novo idioma mantendo estrutura existente.

### ❓ Quanto tempo leva para meu PR ser revisado?

⏱️ PRs são revisados em **5-7 dias úteis**. Correções críticas de bugs são priorizadas.

---

## Contato para Contribuições

**Dúvidas sobre contribuições técnicas**:  
📧 [castropizzano@gmail.com](mailto:castropizzano@gmail.com)

**Issues no GitHub**:  
🐛 [github.com/castrobreno/nyx-post-porn-release/issues](https://github.com/castrobreno/nyx-post-porn-release/issues)

**Discussões e propostas**:  
💬 [GitHub Discussions](https://github.com/castrobreno/nyx-post-porn-release/discussions) *(em breve)*

**Comunidade**:  
📷 Instagram: [@nyxpostporn](https://www.instagram.com/nyxpostporn/)

---

## Agradecimentos

Obrigado por considerar contribuir com **NYX-POST-PORN**! Seu trabalho ajuda a:
- 📚 Democratizar acesso a cinema experimental
- 🛠️ Melhorar infraestrutura técnica do projeto
- 🌍 Alcançar públicos internacionais através de traduções
- 🎓 Fortalecer pesquisa acadêmica em artes

---

<div align="center">

**Suas contribuições respeitosas são parte da expansão coletiva desta obra.**

*Desenvolvido com* 🖤 *por mestrandos do PPG-CINEAV/UNESPAR*

[← Voltar ao README](README.md)

</div>
