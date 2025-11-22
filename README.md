# NYX-POST-PORN

> Uma experiência cinemática digital que explora os limites da narrativa audiovisual e da performance diante da câmera.

[![Version](https://img.shields.io/badge/version-1.3.0-gold)](https://nyx-post-porn.lovable.app)
[![Lovable](https://img.shields.io/badge/Built%20with-Lovable-ff69b4)](https://lovable.dev)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)

---

## 🎬 Sobre o Projeto

**NYX-POST-PORN** é um filme experimental de longa-metragem que investiga a performatividade da sexualidade diante da câmera, questionando a objetificação do corpo através da linguagem cinematográfica. Este website é a plataforma oficial do projeto, oferecendo uma experiência imersiva que reflete a estética dark e cinematográfica da obra.

### 🎥 Sinopse

Uma videochamada de sexo que se transforma em reflexão sobre desejo, poder e espetáculo. NYX-POST-PORN propõe uma desconstrução da pornografia tradicional através de uma narrativa que expõe os mecanismos de representação do corpo e do sexo no cinema.

**[🔗 Acesse o site](https://nyx-post-porn.lovable.app)**

---

## ✨ Características

- 🔞 **Age Gate** - Sistema de verificação de idade 18+ com persistência local
- 🌍 **Bilíngue** - Interface completa em Português e Inglês
- 🎨 **Design Cinematográfico** - Paleta escura com detalhes em ouro/creme
- 📱 **100% Responsivo** - Experiência otimizada para mobile, tablet e desktop
- ♿ **Acessível** - Hierarquia semântica e navegação por teclado
- ⚡ **Performance** - Build otimizado com Vite + lazy loading
- 🎭 **Micro-interações** - Animações sutis com Framer Motion
- 📄 **Documentação Completa** - Referências teóricas e visuais integradas

---

## 🛠️ Stack Tecnológico

### Frontend Core
- **[React 18](https://react.dev)** - Biblioteca UI com hooks modernos
- **[TypeScript](https://www.typescriptlang.org)** - Type safety e developer experience
- **[Vite](https://vitejs.dev)** - Build tool ultrarrápido
- **[React Router](https://reactrouter.com)** - Roteamento client-side

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com)** - Componentes acessíveis e customizáveis
- **[Radix UI](https://www.radix-ui.com)** - Primitivos de UI headless
- **[Framer Motion](https://www.framer.com/motion)** - Animações declarativas

### Developer Tools
- **[ESLint](https://eslint.org)** - Linting de código
- **[PostCSS](https://postcss.org)** - Transformação CSS
- **[Lucide React](https://lucide.dev)** - Ícones SVG otimizados

---

## 🎨 Sistema de Design

### Paleta de Cores

```css
/* Cores Primárias */
--background: #0C0C0C      /* Deep Black */
--cream: #e8d5c4           /* Cream - Títulos e destaques */
--gold: #9b7653            /* Gold - Textos e bordas */

/* Gradientes */
--gradient-overlay: linear-gradient(to-b, black/20, transparent, black)
--gradient-radial: radial-gradient(circle at center, black/0, black/60)
```

### Tipografia

**Família:** [TT Commons](https://fonts.google.com/specimen/TT+Commons) (Google Fonts)

```css
/* Hierarquia */
H1 (Títulos principais): 36px / Bold / Uppercase / #e8d5c4
H2/H3 (Subtítulos):      24px / Semibold / #e8d5c4
Body (Textos):           24px / Regular / #9b7653 / line-height 1.8
Small (Legendas):        16px / Light / #9b7653
```

**Mobile Adjustments:**
- H1: 28px
- H2/Body: 18px
- Small: 14px

### Componentes Reutilizáveis

```tsx
// Classes utilitárias customizadas
.nyx-h1      → Títulos principais (36px bold uppercase)
.nyx-h2      → Subtítulos (24px semibold)
.nyx-body    → Textos (24px regular, line-height 1.8)
.nyx-small   → Legendas (16px light)
.nyx-xs      → Notas (14px light)
```

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 18+ ou **Bun** 1.0+
- npm, yarn ou bun

### Instalação

```bash
# Clone o repositório via GitHub
# (conecte seu projeto ao GitHub através do botão GitHub no topo do Lovable)

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

### Build para Produção

```bash
# Gere a build otimizada
npm run build

# Preview da build de produção
npm run preview
```

---

## 📁 Estrutura do Projeto

```
nyx-post-porn/
├── public/
│   ├── images/          # Imagens estáticas (hero, posters, referências)
│   ├── audio/           # Trilha sonora do filme
│   ├── documents/       # PDFs das referências teóricas
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── AgeGate.tsx
│   │   ├── Hero.tsx
│   │   ├── Synopsis.tsx
│   │   ├── Concept.tsx
│   │   ├── Process.tsx
│   │   ├── Filmmakers.tsx
│   │   ├── References.tsx
│   │   ├── VisualReferences.tsx
│   │   ├── Credits.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── contexts/
│   │   └── LanguageContext.tsx  # Gerenciamento de idiomas
│   ├── lib/
│   │   ├── translations.ts      # Conteúdo bilíngue
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   ├── App.tsx
│   ├── index.css        # Design system & tokens
│   └── main.tsx
├── tailwind.config.ts   # Configuração Tailwind + tokens
├── vite.config.ts
└── package.json
```

---

## 🎯 Funcionalidades Principais

### 1. Age Gate Inteligente
- Verificação 18+ obrigatória
- Persistência com `localStorage`
- Formulário de data de nascimento com validação
- Animações de transição suaves

### 2. Sistema de Internacionalização
- Context API para gerenciamento de idioma
- Suporte PT-BR e EN-US
- Traduções completas (UI + conteúdo editorial)
- Persistência da preferência do usuário

### 3. Seções do Site

**Hero** - Imagem full-screen com título overlay  
**Sinopse** - Apresentação narrativa do filme  
**Conceito** - Fundamentação teórica e artística  
**Processo Criativo** - Making of e metodologia  
**Realizadores** - Biografias + trilha sonora  
**Pôsteres** - Galeria de materiais gráficos  
**Documentação** - Referências teóricas com PDFs  
**Referências Visuais** - Filmes que inspiraram o projeto  
**Créditos** - Ficha técnica completa  

### 4. Experiência Visual

- **Hover Effects:** P&B → Colorido nas imagens
- **Lazy Loading:** Imagens otimizadas
- **Smooth Scrolling:** Navegação fluida entre seções
- **Micro-interações:** Feedback visual em todos os elementos

---

## 🎓 Referências Teóricas

O projeto dialoga com textos fundamentais de teoria do cinema e estudos visuais:

- **Laura Mulvey** - *Prazer Visual e Cinema Narrativo*
- **Jean-Louis Comolli** - *Ver e Poder*
- **Luciana Vinhosa** - *Videoperformance: Limites do Corpo*
- **Carol Azevedo** - *Sexorcismos: Blasfêmia e Transgressão*
- **Marinelli & Machado** - *Práticas Monstruosas*

📄 PDFs disponíveis para download no site.

---

## 👥 Créditos

### Realizadores
**Alessandra Marques** - Direção, Produção, Roteiro, Montagem, Desenho de Som  
Artista visual e cineasta experimental, investiga corpo, memória e dispositivos tecnológicos.

**Marina Lins** - Performance, Produção  
Performer e pesquisadora, explora corporalidades marginais e políticas do visível.

### Trilha Sonora
**Victor Torres** - Composição Original  
Compositor e sound designer, cria paisagens sonoras para cinema experimental.

---

## 📜 Licença

**Todos os direitos reservados © 2024 Alessandra Marques & Marina Lins**

O código-fonte deste website está disponível para fins educacionais e de portfólio.  
O conteúdo audiovisual, textual e artístico do filme **NYX-POST-PORN** é protegido por direitos autorais.

**Uso permitido:** Visualização do código, estudo, referência técnica.  
**Uso proibido:** Redistribuição comercial, reutilização de assets, cópia de conteúdo editorial.

Para licenciamento ou colaborações, entre em contato com as realizadoras.

---

## 🌐 Links

- **Website:** [nyx-post-porn.lovable.app](https://nyx-post-porn.lovable.app)
- **Contato:** Para licenciamento ou colaborações, acesse o site oficial

---

## 🙏 Agradecimentos

Agradecimentos especiais:
- **FACC/UFRJ** - Faculdade de Comunicação
- **CineCriare** - Laboratório de cinema experimental
- **Lovable Platform** - Ferramenta de desenvolvimento

---

**Construído com [Lovable](https://lovable.dev)** - A plataforma de desenvolvimento full-stack impulsionada por IA.
