# Tech Stack Decision

## Decision

Astro + Markdown/MDX + Tailwind CSS, hosted on GitHub Pages (free).

## Requirements

- Personal portfolio website with plethora of content: articles, videos, social media showcases (Instagram, TikTok, YouTube)
- Optimized for vibe coding (AI-assisted development)
- As cheap as possible to host
- Git-based content workflow (write `.md` → push → site rebuilds)

## Frameworks Evaluated

### WordPress — Rejected

- Poor vibe coding fit: PHP templates, hook/filter architecture doesn't play well with AI code generation
- Hosting cost: $5–15/mo minimum (requires PHP + MySQL)
- Overkill plugin ecosystem for a personal portfolio

### Laravel — Rejected

- Decent vibe coding support (structured PHP), but heavy for a portfolio
- Hosting cost: $5–15/mo (requires PHP + database server)
- Server-side framework is overkill for content that can be static

### Next.js + MDX — Strong Candidate

- Excellent vibe coding: React/JSX has the largest AI training data representation
- Free hosting via Vercel/Netlify/Cloudflare Pages (static export)
- Concern: static export builds slow down with large content volumes

### Astro — Selected

- Built specifically for content-heavy sites
- Content Collections provide typed, validated Markdown/MDX out of the box
- Fast builds even with hundreds of pages
- Components close enough to JSX that AI tools handle them well
- Can use React components inside Astro if needed
- Free hosting on GitHub Pages / Cloudflare Pages / Netlify

## Final Stack

| Layer     | Tool                  | Reason                                              |
| --------- | --------------------- | --------------------------------------------------- |
| Framework | Astro                 | Content-first, fast builds, component-based         |
| Content   | Markdown/MDX          | Files in repo, no CMS needed, zero cost             |
| Styling   | Tailwind CSS          | AI tools generate Tailwind fluently                 |
| Hosting   | GitHub Pages          | Free, auto-deploys via GitHub Actions               |
| Videos    | YouTube/TikTok embeds | No self-hosted video — iframe embeds from platforms |

## Workflow

```
Write .md file → git push → GitHub Actions builds Astro → GitHub Pages serves it
```

## What We Don't Need

- No database
- No CMS
- No server
- No paid hosting
- No Docker

## Video Strategy

GitHub Pages has a 1GB repo size limit — cannot host video files directly. All videos are embedded from external platforms (YouTube, TikTok, Instagram) via iframes. For self-hosted videos not on any platform, Cloudflare R2 (10GB free) or YouTube unlisted uploads are fallback options.

## Open Questions

- Specific Astro template/theme to use as starting point
- Content taxonomy (categories, tags) structure
- Whether to add a headless CMS later for visual editing
