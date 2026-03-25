# AI Agent Guide

> This file helps AI coding agents (Cursor, Copilot, Claude Code, Windsurf, etc.) understand and work with this codebase.

## Quick Context

This is a **Next.js 16 portfolio website** for a designer. It uses the App Router with static generation. All pages are pre-rendered at build time.

## File Map

### Pages (src/app/)
| File | Route | Client? | Description |
|------|-------|---------|-------------|
| `layout.tsx` | — | No | Root layout: fonts, metadata, JSON-LD, Header/Footer |
| `page.tsx` | `/` | Yes | Homepage: hero, 4 project showcases, contact CTA |
| `design/page.tsx` | `/design` | Yes | 2x2 project grid with hover overlays |
| `design/layout.tsx` | — | No | SEO metadata for /design |
| `contact/page.tsx` | `/contact` | Yes | Social links, contact info, profile image |
| `contact/layout.tsx` | — | No | SEO metadata for /contact |
| `impressum/page.tsx` | `/impressum` | Yes | Legal page (German) |
| `impressum/layout.tsx` | — | No | SEO metadata for /impressum |
| `projects/tesla/page.tsx` | `/projects/tesla` | No | Tesla Cyberrad gallery (6 images) |
| `projects/readymade/page.tsx` | `/projects/readymade` | No | Readymade Motorcycle gallery (6 images) |
| `projects/illustration/page.tsx` | `/projects/illustration` | No | Book of Time gallery (25 images) |
| `projects/little/page.tsx` | `/projects/little` | No | LittleEasy Table gallery (7 images) |
| `sitemap.ts` | `/sitemap.xml` | — | Dynamic sitemap generation |
| `robots.ts` | `/robots.txt` | — | Robots with AI crawler rules |
| `manifest.ts` | `/manifest.webmanifest` | — | PWA manifest |

### Components (src/components/)
| File | Used By | Description |
|------|---------|-------------|
| `layout/Header.tsx` | Root layout | Logo, nav links with magnetic effect, animated underlines |
| `layout/Footer.tsx` | Root layout | Copyright, nav links, staggered entrance animation |
| `ui/AnimatedText.tsx` | Most pages | Word-by-word text reveal with 3D rotateX |
| `ui/CustomCursor.tsx` | Root layout | Purple dot cursor, scales on hoverable elements |
| `ui/MagneticButton.tsx` | Header, Footer, CTA | Wrapper that makes children follow mouse with spring physics |
| `ui/ScrollProgress.tsx` | Root layout | Purple progress bar at top of viewport |
| `ProjectShowcase.tsx` | Homepage | Project card with 3D tilt, alternating text/image layout |
| `ProjectGallery.tsx` | Project pages | Parallax image gallery with back nav and title |

### Data Flow
```
layout.tsx (Barlow font, Header, Footer, CustomCursor, ScrollProgress)
  └── page.tsx (homepage)
        ├── ProjectShowcase × 4 (each has AnimatedText, MagneticButton internally)
        └── Contact CTA section
  └── design/page.tsx → links to /projects/*
  └── projects/*/page.tsx → ProjectGallery (has ParallaxImage internally)
```

## Design Tokens (globals.css)
```css
--accent: #5c3bbd      /* Purple — links, buttons, labels, cursor */
--accent-light: #7c5ce0 /* Purple hover state */
--background: #fafafa    /* Page background */
--foreground: #111111    /* Body text */
```

## Common Tasks

### Add a new page
1. Create `src/app/[route]/page.tsx`
2. If using Framer Motion: add `"use client"` and create a sibling `layout.tsx` for metadata
3. If server component: export `metadata` directly from page

### Add a new project
1. Put images in `public/images/` (lowercase, hyphenated filenames)
2. Create `src/app/projects/[slug]/page.tsx` using `ProjectGallery` component
3. Add to homepage array in `src/app/page.tsx`
4. Add to design grid in `src/app/design/page.tsx`
5. Add to `src/app/sitemap.ts`
6. Add BreadcrumbList JSON-LD

### Modify animations
- Global variants: `src/lib/animations.ts`
- Component-specific: inline `variants`, `initial`, `animate`, `whileInView` props
- Easing curve used everywhere: `[0.25, 0.46, 0.45, 0.94]`
- Spring configs: `{ stiffness: 300, damping: 20-30 }`

### Modify colors
- Change CSS variables in `src/app/globals.css` under `:root`
- Accent color is referenced as `var(--accent)` in Tailwind: `text-[var(--accent)]`

### Modify layout width
- Container: `w-[90%] max-w-[1100px] mx-auto` (search for this pattern)

## Gotchas

1. **Metadata in client components**: Next.js doesn't allow `export const metadata` in `"use client"` files. Use a `layout.tsx` in the same route folder instead.

2. **Image filenames**: The `public/images/` filenames are referenced in multiple files. Renaming an image requires updating all references.

3. **Framer Motion types**: When using ease arrays as variants, cast with `as const` to satisfy TypeScript (see `AnimatedText.tsx`).

4. **Custom cursor**: `cursor: none !important` is set globally in CSS. The `CustomCursor` component renders the replacement. On mobile (`<768px`) the native cursor is restored.

5. **OG image URL**: Must be absolute (`https://t-zhong.de/og-image.png`), not relative. Set via `metadataBase` in root layout.

6. **No dark mode**: This is intentionally light-only. Don't add `dark:` variants.
