# Rafael Almeida — Portfolio

Portfolio pessoal construído com Next.js 16, TypeScript, Tailwind CSS v4 e Motion, usando estética **neubrutalista moderna**.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (configuração CSS-first com `@theme`)
- **Motion** (Framer Motion para React 19)
- **Fontes**: Outfit (headings) + Lexend (body) via `next/font/google`

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Root layout (fontes, metadata)
│   ├── page.tsx         # Composição das seções
│   └── globals.css      # Tema neubrutalista (@theme)
├── components/
│   ├── Hero.tsx         # Seção hero com nome e links
│   ├── BentoGrid.tsx    # Grid de cards de projetos
│   ├── ProjectCard.tsx  # Card com deep dive expansível
│   ├── ExperienceCard.tsx # Timeline de experiência
│   ├── TechStack.tsx    # Badges de tecnologias
│   ├── Footer.tsx       # Rodapé com contato
│   └── NeuButton.tsx    # Botão neubrutalista reutilizável
└── data/
    └── projects.ts      # Dados centralizados
```

## Deploy

Pensado para deploy na **Vercel**:

```bash
npx vercel
```

## Licença

MIT
