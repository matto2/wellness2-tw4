# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for Wellness Medical Center, a traditional Chinese medicine clinic in Santa Cruz. The site features practitioner information, a markdown-based blog, a product shop, and booking integration.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Tech Stack

- **Framework**: Astro 6+ (static site generation)
- **Styling**: Tailwind CSS 4.1+ (using new v4 Vite plugin)
- **Content**: Astro Content Collections (blog posts as markdown files)
- **Animations**: Motion (motion.dev)
- **UI Components**: Swiper (carousels/slideshows)

## Architecture

### Content System

Blog posts are markdown files in `src/content/blog/`. The collection schema is defined in `src/content.config.ts` using Astro's Content Layer API (glob loader).

Blog frontmatter fields: `title`, `pubDate`, `author`, `readTime`, `image`, `description` (optional)

Products are defined in `src/data/products.json` and rendered by `src/pages/shop.astro`.

### Page Routes

- `/` - Homepage (src/pages/index.astro)
- `/about` - About page
- `/blog` - Blog listing page
- `/blog/[slug]` - Dynamic blog post pages (from markdown files)
- `/shop` - Product listing page
- `/identity-redirect` - Netlify Identity callback for Decap CMS admin

### Layouts

- **Layout.astro**: Base layout with Header/Footer, global styles, font loading
- **BlogLayout.astro**: Layout for blog listing pages
- **BlogPostLayout.astro**: Layout for individual blog post pages

### Key Components

- **VideoHero.astro**: Full-width video background hero section
- **ImageSlideshow.astro**: Automated image carousel using Swiper
- **TestimonialCarousel.astro**: Client testimonials carousel
- **BookingModal.astro**: Appointment booking integration
- **Header.astro / Footer.astro**: Site navigation and footer
- **MobileMenu.astro**: Responsive mobile navigation
- **Motion.astro**: Wrapper component for scroll animations
- **Icon components** (AcuIcon, HerbsIcon, LotusIcon, WellnessIcon, BrandLogo): SVG icons

### Styling Approach

- Using Tailwind CSS v4 with Vite plugin (configured in astro.config.mjs)
- PostCSS config includes @tailwindcss/postcss and autoprefixer
- Global styles in src/styles/global.css
- CSS custom properties for theme colors (--color-primary, --color-card-bg, etc.)
- Typography plugin for prose styles (@tailwindcss/typography)

### Asset Handling

- Images imported from src/assets/ using Astro's built-in image optimization
- Clinic photos organized in src/assets/clinic/
- Astro Image component used for optimized images with width/height/quality params
- Build assets output to `_assets/` directory (configured in astro.config.mjs)

## Common Development Patterns

### Adding a New Blog Post
Create a `.md` file in `src/content/blog/` with the required frontmatter. It will appear automatically — no CMS or external service needed.

### Adding a New Product
Add an entry to `src/data/products.json`.

### Working with Content Collections
Import and query using `import { getCollection, render } from 'astro:content'`.
Use `post.id.replace(/\.mdx?$/, '')` to generate URL slugs from entry IDs.

### TypeScript Configuration
Uses strict Astro TypeScript config (extends "astro/tsconfigs/strict").

## Git Branch Information

- Main branch: `main`
- Deployed automatically via Netlify on push to main
