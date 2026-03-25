<div align="center">

<img src="public/og-image.png" alt="Tianxiong Zhong — Design Portfolio" width="720" />

<br />

<img src="public/favicon.svg" alt="TZ Logo" width="56" height="56" />

# Tianxiong Zhong — Design Portfolio

**An optimized Next.js recreation of [t-zhong.de](https://t-zhong.de/)**

Modern, animated, SEO-optimized portfolio featuring transportation design, industrial design, illustration & furniture design.

[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[View Live](https://t-zhong.de/) &nbsp;&middot;&nbsp; [Report Bug](https://github.com/noluyorAbi/t-zhong-portfolio/issues) &nbsp;&middot;&nbsp; [Request Feature](https://github.com/noluyorAbi/t-zhong-portfolio/issues)

</div>

<br />

---

<br />

## Highlights

<table>
<tr>
<td width="50%">

### Interactive & Animated
- Custom cursor with spring physics
- Magnetic buttons following mouse position
- 3D tilt on project cards via perspective transforms
- Parallax scrolling in project galleries
- Word-by-word text reveal with `rotateX`
- Clip-path image reveals on scroll
- Staggered grid entrance animations
- Scroll progress indicator

</td>
<td width="50%">

### SEO & AI-Ready
- JSON-LD: `Person`, `WebSite`, `CollectionPage`, `BreadcrumbList`
- Open Graph + Twitter Cards per page
- Auto-generated `sitemap.xml` & `robots.txt`
- `llms.txt` / `llms-full.txt` for AI crawlers
- `.well-known/ai-plugin.json` for LLM discovery
- Explicit allow rules for GPTBot, ClaudeBot, PerplexityBot & more
- Custom OG image (1200 x 630)
- PWA manifest

</td>
</tr>
</table>

<br />

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Framework** | Next.js 16 (App Router, SSG) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Fonts** | Barlow via `next/font` (self-hosted, zero CLS) |
| **Images** | `next/image` (auto WebP/AVIF, lazy loading) |
| **Linting** | ESLint + Prettier |
| **SEO** | JSON-LD, OG, Twitter Cards, Sitemap, Robots |

<br />

## Quick Start

```bash
# Clone
git clone https://github.com/noluyorAbi/t-zhong-portfolio.git
cd t-zhong-portfolio

# Install
npm install

# Dev
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**

<br />

## Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build (SSG) |
| `npm start` | Serve production build |
| `npx tsc --noEmit` | Type check |
| `npx eslint src/` | Lint |
| `npx prettier --write "src/**"` | Format |

<br />

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout, fonts, structured data
│   ├── page.tsx                    # Homepage
│   ├── globals.css                 # Tailwind + CSS custom properties
│   ├── sitemap.ts                  # Dynamic sitemap generation
│   ├── robots.ts                   # Robots with AI crawler rules
│   ├── manifest.ts                 # PWA manifest
│   ├── icon.svg                    # SVG favicon
│   ├── apple-icon.png              # Apple Touch Icon
│   ├── design/                     # /design — project grid
│   ├── contact/                    # /contact — info + socials
│   ├── impressum/                  # /impressum — legal (DE)
│   └── projects/
│       ├── tesla/                  # Tesla Cyberrad gallery
│       ├── readymade/              # Readymade Motorcycle gallery
│       ├── illustration/           # Book of Time gallery
│       └── little/                 # LittleEasy Table gallery
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Animated nav + magnetic links
│   │   └── Footer.tsx              # Staggered footer links
│   ├── ui/
│   │   ├── AnimatedText.tsx        # Word-by-word 3D text reveal
│   │   ├── CustomCursor.tsx        # Spring-physics cursor
│   │   ├── MagneticButton.tsx      # Mouse-following wrapper
│   │   └── ScrollProgress.tsx      # Top progress bar
│   ├── ProjectShowcase.tsx         # Homepage cards (3D tilt)
│   └── ProjectGallery.tsx          # Detail pages (parallax)
├── lib/
│   └── animations.ts              # Shared Framer Motion variants
public/
├── images/                        # 66 assets from original site
├── og-image.png                   # Open Graph image (1200x630)
├── llms.txt                       # AI crawler summary
├── llms-full.txt                  # AI crawler full context
├── humans.txt                     # Site credits
└── .well-known/ai-plugin.json     # LLM plugin manifest
```

<br />

## Pages

| Route | Description |
|:------|:------------|
| `/` | Homepage — about section + 4 project showcases + contact CTA |
| `/design` | Grid view of all projects with hover overlays |
| `/contact` | Social links, email, phone, address + profile image |
| `/projects/tesla` | Tesla Cyberrad — Transportation Design |
| `/projects/readymade` | Readymade Motorcycle — Transportation Design |
| `/projects/illustration` | The Book of Time — Illustration (25 pages) |
| `/projects/little` | LittleEasy Table — Furniture Design |
| `/impressum` | Legal notice (German) |

<br />

## Performance

All pages are **statically generated** at build time. Key optimizations:

- **Images** — `next/image` serves responsive WebP/AVIF with lazy loading
- **Fonts** — Self-hosted Barlow via `next/font`, zero layout shift
- **CSS** — Tailwind v4 generates minimal output
- **Code Splitting** — Automatic per-route chunks
- **Animations** — GPU-accelerated via `transform` and `opacity` only

<br />

## SEO Checklist

- [x] Unique `<title>` and `<meta description>` per page
- [x] Canonical URLs
- [x] Open Graph metadata with custom OG image
- [x] Twitter Card metadata
- [x] JSON-LD structured data (Person, WebSite, CollectionPage, BreadcrumbList)
- [x] `sitemap.xml` with priorities
- [x] `robots.txt` with AI crawler allow rules
- [x] `llms.txt` + `llms-full.txt` for LLM context
- [x] `.well-known/ai-plugin.json`
- [x] `manifest.webmanifest`
- [x] SVG favicon + Apple Touch Icon
- [x] `humans.txt`
- [x] Semantic HTML (`<main>`, `<section>`, `<nav>`, `<footer>`)
- [x] Alt text on all images
- [x] `lang="en"` on `<html>`

<br />

---

<div align="center">

Built with [Next.js](https://nextjs.org/) and [Framer Motion](https://www.framer.com/motion/)

</div>
