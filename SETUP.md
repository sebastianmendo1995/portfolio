# Portfolio Setup

This is a Next.js 14 App Router project rebuilt from scratch.

## Quick Start

```bash
# 1. Delete old node_modules (CRA dependencies)
rm -rf node_modules

# 2. Install new Next.js dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo at vercel.com — it auto-detects Next.js.

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Nav.tsx       # Sticky nav with scroll effect
│   │   └── Footer.tsx    # Simple footer
│   ├── sections/
│   │   ├── Hero.tsx      # Hero with Framer Motion entrance
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Stack.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── FadeIn.tsx    # Framer Motion scroll animations
│       ├── Badge.tsx     # Badge + GreenDot components
│       └── Icons.tsx     # Inline SVG icons
└── lib/
    └── data.ts           # ALL content lives here — edit this file
```

## Customizing Content

Edit `src/lib/data.ts` to update any copy, links, experience, or projects.
No need to touch component files for content changes.
