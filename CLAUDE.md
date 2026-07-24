# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfólio pessoal de Gabriel Borges (codeborges.com.br) — Full-Stack, UX Designer e CTO da CODE BORGES. Construído como uma SPA estática em Next.js (App Router) que consome a API do GitHub para listar projetos em destaque. Todo o conteúdo textual/curriculo é estático, definido em `src/util/user-information.tsx`.

## Comandos

```bash
pnpm dev      # inicia o servidor de desenvolvimento (next dev)
pnpm build    # build de produção (next build)
pnpm start    # serve o build de produção
pnpm lint     # formata e checa o código com Biome (biome check --write ./src)
```

Não há suíte de testes configurada — o lint do Biome é a única verificação automatizada. Não há comando `pnpm test`.

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

- `NEXT_PUBLIC_GITHUB_USERNAME` — usuário do GitHub a ser exibido.
- `NEXT_PUBLIC_GITHUB_API_TOKEN` — token pessoal do GitHub (necessário para evitar rate-limit ao buscar repositórios).
- `NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY` — lista CSV de repositórios a destacar na home/projects (vira array via Zod em `src/env/index.ts`).
- `NEXT_PUBLIC_REPOSITORIES_ARRAY` — lista CSV de repositórios exibidos como "outros projetos".

As variáveis são validadas por Zod no servidor (`src/env/index.ts`); o cliente recebe apenas as públicas já divididas por `,`.

## Arquitetura

### Stack

- **Next.js 16.2** (App Router, RSC) + **React 19.2**.
- **TypeScript 5.4** com `strict: true`. `next.config.mjs` define `typescript.ignoreBuildErrors: true` — erros de tipo não quebram o build, mas devem ser corrigidos.
- **TailwindCSS 3.4** (single config em `tailwind.config.js`) + `@tailwindcss/typography` + `tailwindcss-animate` + `tailwindcss-debug-screens`. O plugin `debug-screens` é ativado em desenvolvimento via `bg-black debug-screens` no `<body>`.
- **shadcn/ui** (estilo `new-york`, base `zinc`) — primitivos em `src/components/ui/` (`card`, `badge`).
- **Biome** (formatação + lint) — config em `biome.json`. Aspas simples, semicolons opcionais, indent 4 espaços. **Há também** `eslint.config.mjs` com `eslint-config-next`, mas o script `lint` só roda Biome; ESLint está disponível mas não é invocado.
- **Framer Motion** para o card com efeito spotlight (`src/components/card.tsx`).
- **lucide-react**, **react-icons**, **@radix-ui/react-icons** para ícones.
- **zod** para validação de env vars.

### Estrutura de pastas

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # Root layout — carrega Inter (next/font/google) + CalSans (local em public/fonts)
│   ├── global.css          # @tailwind + variáveis CSS (light/dark via :root e .dark)
│   ├── page.tsx            # Home: hero, partículas, links sociais
│   ├── projects/           # /projects — lista repositórios do GitHub (destacados + outros)
│   ├── curriculum/         # /curriculum — hard/soft skills, formação, cursos, experiências, idiomas
│   └── contact/            # /contact — cards de redes sociais
├── components/             # Client components reutilizáveis (todos 'use client')
│   ├── ui/                 # shadcn primitives (card, badge)
│   ├── nav.tsx             # Header fixo com IntersectionObserver (muda estilo ao scroll)
│   ├── card.tsx            # Card com máscara radial animada via framer-motion
│   ├── particles.tsx       # Canvas 2D com partículas que reagem ao mouse
│   ├── project-list.tsx    # Grid de cards de repositório
│   ├── experiences-list.tsx, formation-list.tsx, couses-list.tsx, language-list.tsx
│   └── structure.tsx       # Layout alternativo com header sticky (parece não utilizado nas rotas atuais)
├── util/
│   ├── get-user.ts         # getUserGitHub(): fetch SSR do user + 3 páginas de repos via Promise.all
│   ├── user-information.tsx # TODOS os dados estáticos (hardSkills, softSkills, formation, courses, experiences, languages) — note: retorna JSX de ícones
│   ├── mouse.ts            # Hook useMousePosition
│   └── transforme-phone.ts # Formata telefone BR (55 + DDD + número) para "(XX) XXXXX-XXXX"
├── env/index.ts            # Validação Zod das env vars (server vs client)
└── lib/utils.ts            # cn() = twMerge(clsx(...inputs))
```

### Fluxo de dados

1. **Server Components** (`page.tsx` em `/`, `/projects`, `/curriculum`) chamam `getUserGitHub()` diretamente — sem cache persistente (usa `cache: 'no-store'` e tag `'github'` para revalidação via `revalidateTag` se necessário).
2. `getUserGitHub()` busca perfil + 3 páginas de repos em paralelo e filtra por nome conforme os arrays em env.
3. O resultado é passado como `props` aos Client Components que renderizam a UI (`ProjectsList`, `ExperiencesList`, etc).
4. **Client Components** vivem isolados com `'use client'` no topo — todos os componentes em `src/components/` (exceto `ui/*` puros) são client.

### Padrões importantes

- **Aliases**: `@/*` → `src/*` (definido em `tsconfig.json`). Use sempre `@/components/...`, `@/lib/utils`, `@/util/...` em vez de caminhos relativos longos. A única exceção é `src/app/page.tsx` que ainda usa `../components/particles` — manter consistência ao tocar.
- **`navigation` e `socials`**: exportados de `src/app/page.tsx` e importados por `nav.tsx` e `contact/page.tsx`. Para adicionar um link no menu ou uma rede social, edite esses arrays na Home.
- **`user-information.tsx` mistura dados e JSX** (ícones como `<FaReact color=... />`). Edite esse arquivo para atualizar o currículo. Cuidado: ele é importado como namespace (`import * as userInfo`) — adicionar export nomeado é suficiente.
- **Validação de env**: variáveis públicas (com prefixo `NEXT_PUBLIC_`) são acessíveis no cliente. O array de repositórios chega como string CSV e é transformado em array dentro do `envSchema` (servidor) ou manualmente (cliente).
- **Imagens remotas**: configuradas em `next.config.mjs` → `images.remotePatterns`: `github.com`, `avatars.githubusercontent.com`, `source.unsplash.com`. Adicione novos hosts lá antes de usar `<Image src="..." />` com URLs externas.
- **Fontes**: Inter via `next/font/google` (variável CSS `--font-inter`); CalSans local em `public/fonts/CalSans-SemiBold.ttf` (variável `--font-calsans`). Ambas aplicadas em `layout.tsx` via `className={[inter.variable, calSans.variable].join(' ')}` e expostas no Tailwind como `font-sans` e `font-display`.
- **Partículas**: o componente `Particles` é client-side e depende de `window` (usa `useMousePosition`). Em rotas server-only, monte-o dentro de um Client Component.

## Convenções de código

- **Aspas simples** e **sem ponto e vírgula** (Biome). Imports com aspas simples.
- **Indentação de 4 espaços** (Biome).
- **Largura de linha 80**.
- Estilo dos componentes React: function components + `React.forwardRef` para os do shadcn. Props com `interface` ou `type` no topo do arquivo.
- Ícones do `react-icons` recebem `color={color.zinc[800]}` (importando `tailwindcss/colors` direto) — é o padrão em `user-information.tsx`; mantenha consistência.

## Referências externas

- README.md tem a versão pública em PT-BR (bio, skills, contatos) — útil apenas para entender o tom, não edite lá conteúdo do site (a fonte da verdade é `user-information.tsx`).
- `biome.json` e `eslint.config.mjs` coexistem; o `pnpm lint` invoca apenas Biome. ESLint pode ser rodado manualmente com `npx eslint ./src` se desejado.
