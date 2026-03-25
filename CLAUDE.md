# Project: Tianxiong Zhong Design Portfolio

## What This Is

A Next.js 16 clone of [t-zhong.de](https://t-zhong.de/) — a designer portfolio with Framer Motion animations, custom cursor, parallax scrolling, and full SEO.

## Tech

- **Next.js 16** — App Router, static generation (SSG), all pages are server components unless marked `"use client"`
- **TypeScript** — strict mode
- **Tailwind CSS v4** — utility-first, configured in `globals.css` with `@theme inline` block
- **Framer Motion** — all animations, scroll-triggered reveals, spring physics
- **Barlow font** — loaded via `next/font/google` in `layout.tsx`, exposed as `--font-barlow` CSS variable

## Architecture

```
src/app/          → Pages (App Router file-based routing)
src/components/   → React components
  layout/         → Header, Footer (structural, appear on every page)
  ui/             → Reusable animated primitives (cursor, magnetic button, text reveal, scroll bar)
  ProjectShowcase.tsx  → Homepage project cards with 3D tilt
  ProjectGallery.tsx   → Project detail pages with parallax images
src/lib/          → Shared utilities
  animations.ts   → Framer Motion variant presets
```

## Key Patterns

### Client vs Server Components
- **Server components** (default): `layout.tsx` files, project detail pages (`projects/*/page.tsx`)
- **Client components** (`"use client"`): Homepage, Design, Contact, Impressum pages — they use Framer Motion which requires client-side rendering
- Layout files in route groups (`design/layout.tsx`, `contact/layout.tsx`) are server components that export `metadata` for SEO since their sibling `page.tsx` files are client components and can't export metadata

### CSS Custom Properties
Defined in `globals.css`:
- `--accent: #5c3bbd` — primary purple color
- `--accent-light: #7c5ce0` — hover state purple
- `--background: #fafafa` — page background
- `--foreground: #111111` — text color

Use in Tailwind: `text-[var(--accent)]`, `bg-[var(--background)]`

### Container Pattern
All content sections use: `w-[90%] max-w-[1100px] mx-auto`
Impressum uses narrower: `max-w-[1000px]`

### Image Handling
- All 66 images are in `public/images/` with lowercase hyphenated names
- Use `next/image` (`<Image>`) for all images — never `<img>`
- Project pages generate image arrays with `Array.from()` pattern

### Animation Patterns
- **Entrance animations**: `initial` + `animate` for on-mount, `initial` + `whileInView` for scroll-triggered
- **Shared easing**: `[0.25, 0.46, 0.45, 0.94]` used throughout
- **Viewport config**: `{ once: true, margin: "-80px" }` prevents re-triggering
- **Clip-path reveals**: `clipPath: "inset(10% 10% 10% 10%)"` → `"inset(0% 0% 0% 0%)"`

## Adding a New Project Page

1. Add images to `public/images/` (lowercase, hyphenated)
2. Create `src/app/projects/[name]/page.tsx`:
   ```tsx
   import type { Metadata } from "next";
   import ProjectGallery from "@/components/ProjectGallery";

   export const metadata: Metadata = {
     title: "Project Name",
     description: "...",
     openGraph: { title: "...", images: ["/images/banner.png"] },
     alternates: { canonical: "/projects/[name]" },
   };

   const images = [
     { src: "/images/banner.png", alt: "Banner" },
     // ...more images
   ];

   export default function Page() {
     return <ProjectGallery title="..." subtitle="..." images={images} />;
   }
   ```
3. Add entry to `src/app/sitemap.ts`
4. Add to project arrays in `src/app/page.tsx` (homepage) and `src/app/design/page.tsx`
5. Add BreadcrumbList JSON-LD script in the page

## SEO Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Global metadata, JSON-LD (Person, WebSite, CollectionPage) |
| `src/app/sitemap.ts` | Auto-generated sitemap.xml |
| `src/app/robots.ts` | robots.txt with AI crawler allow rules |
| `src/app/manifest.ts` | PWA manifest |
| `public/llms.txt` | AI crawler summary |
| `public/llms-full.txt` | AI crawler full context |
| `public/.well-known/ai-plugin.json` | LLM plugin discovery |
| `public/og-image.png` | Open Graph image (1200x630) |

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (SSG)
npx tsc --noEmit     # Type check
npx eslint src/      # Lint
npx prettier --write "src/**"  # Format
```

## Don'ts

- Don't use `<img>` tags — always `next/image`
- Don't add dark mode — this is a light-only design
- Don't remove `"use client"` from pages using Framer Motion
- Don't put `export const metadata` in `"use client"` files — use a sibling `layout.tsx`
- Don't modify image filenames in `public/images/` — they match references across multiple files
