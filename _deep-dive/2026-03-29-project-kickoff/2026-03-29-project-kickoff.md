# Project Kickoff

Complete record of the portfolio project's first session — from framework evaluation through 8 prototypes to a final design recommendation. This note consolidates the full decision-making journey in one place.

## Phase 1: Framework Evaluation

### Requirements

- Personal portfolio website hosting articles, videos, and social media showcases (Instagram, TikTok, YouTube)
- Optimized for **vibe coding** (AI-assisted development with tools like Claude Code, Cursor)
- As **cheap as possible** to host (ideally free)

### Frameworks Considered

| Framework     | Vibe Coding                                                                   | Hosting Cost                                      | Verdict                             |
| ------------- | ----------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------- |
| WordPress     | Poor — PHP hook/filter architecture doesn't play well with AI code generation | $5-15/mo (PHP + MySQL)                            | Rejected                            |
| Laravel       | Decent — structured PHP, but heavy                                            | $5-15/mo (PHP + DB)                               | Rejected — overkill for a portfolio |
| Next.js + MDX | Excellent — React/JSX has largest AI training data                            | Free (static export to Vercel/Netlify/Cloudflare) | Strong candidate                    |
| Astro         | Very good — components close to JSX, built for content                        | Free (same static hosts)                          | Selected                            |

### Why Astro Won Over Next.js

- **Content Collections** provide typed, validated Markdown/MDX out of the box — no extra wiring
- **Faster builds** with large content volumes (Next.js static export slows down at scale)
- Can use React components inside Astro if needed (escape hatch)
- Purpose-built for content-heavy static sites

## Phase 2: Content Strategy

### Content Types Identified

1. **Articles** — written in Markdown/MDX, stored as files in the git repo
2. **Videos** — embedded from YouTube/TikTok via iframes (not self-hosted — GitHub Pages has 1GB repo limit)
3. **Social links** — showcases linking to Instagram, TikTok, YouTube channels
4. **Notes** — potential future note-taking app for non-sensitive Markdown notes

### Video Hosting Strategy

Videos are never stored in the repo. All video content is embedded from external platforms:
- YouTube (public or unlisted) — unlimited, free, built-in transcoding
- TikTok — native embed script
- Instagram — native embed
- For self-hosted videos not on any platform: Cloudflare R2 (10GB free) as fallback

### Content Workflow

```
Write .md file → git push → GitHub Actions builds Astro → GitHub Pages serves it
```

No database, no CMS, no server, no Docker, no paid hosting.

## Phase 3: Hosting & Deployment

### GitHub Pages Setup

- Repository: `github.com/notalentgeek/site`
- Deploy URL: `https://notalentgeek.github.io/site/`
- Deployment method: GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Trigger: push to `master` branch
- Required manual step: Settings > Pages > Source > "GitHub Actions"

### Note on Filesystem

The project lives on an external drive (Elements) with a filesystem that doesn't support symlinks. This means `npm install` fails locally due to EPERM errors on symlink creation. Builds work fine on GitHub Actions (Ubuntu runner with ext4). For local development, the project would need to be on a native Linux filesystem.

## Phase 4: Design Exploration — 8 Prototypes

### General Explorations (001-005)

| #   | Name               | Core Idea                               | Key Visual                                              |
| --- | ------------------ | --------------------------------------- | ------------------------------------------------------- |
| 001 | Minimal Editorial  | Typography-focused blog/magazine        | Serif headings, 680px column, deep blue accent          |
| 002 | Bold Creative      | Awwwards-style dark agency portfolio    | Dark bg, purple/cyan, animated gradient hero, card grid |
| 003 | Developer Terminal | Hacker/retro terminal aesthetic         | Green-on-black, monospace, ASCII art, blinking cursor   |
| 004 | Magazine Grid      | Pinterest/Behance-style visual browsing | Masonry CSS grid, coral accent, sidebar with tags       |
| 005 | Bento Dashboard    | iOS widget / Linear-style dashboard     | CSS Grid bento, glassmorphism cards, indigo accent      |

### Design Direction Research

After the initial 5 prototypes, two reference sites were identified as the ideal direction:

**paco.me (Paco Coursey)**
- Ultra-minimal index-style personal site
- No navigation bar — flat architecture with inline links
- Homepage is a vertical stack of sections: intro, building, projects, writing, now, connect
- Articles grouped by year with date + optional description
- `/craft` page shows interactive demos grouped by category
- Monochromatic, system sans-serif, 520px column
- Footer: philosophical tagline + email + Twitter
- Tech: Next.js, React, Vercel

**leerob.com (Lee Robinson)**
- Prose-first editorial site — homepage reads like a personal letter
- No navigation bar — "By Lee Robinson" link on subpages
- Homepage: conversational paragraphs with inline hyperlinks, featured writing (6 curated articles), closing contact paragraph
- `/writing` page: flat list of titles, no dates, no descriptions
- Serif font (Stix Two Text), 580px column, generous line-height
- Social links woven into natural prose, not grouped in a footer
- No footer — page just ends
- Tech: Next.js, React, Tailwind CSS, Vercel

**Shared insight:** Both sites leave the background completely clean — solid color, no gradients, no patterns. This is perfect for the planned future 3D background layer.

### Refined Prototypes (006-008)

| #   | Name           | Design DNA                                                                                                         | Column Width |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| 006 | Paco Minimal   | Faithful to paco.me — sectioned index, year-grouped writing, `_Index` navigation, system sans-serif                | 520px        |
| 007 | Lee Editorial  | Faithful to leerob.com — prose paragraphs with inline links, Georgia serif, "By [Name]" navigation                 | 580px        |
| 008 | Hybrid Minimal | Paco's structure + Lee's typography — sectioned index with conversational prose intros, serif body + sans headings | 550px        |

## Phase 5: Unified Site & Demo Pages

### Problem

The 8 prototypes were separate Astro projects (each with own `package.json`). They couldn't be viewed as rendered pages — only as source code on GitHub.

### Solution

Created self-contained demo pages at `/site/demo/001/` through `/site/demo/008/`. Each is a standalone HTML document with all CSS inlined in `<style>` tags to avoid conflicts between different themes. No shared layouts or components — each demo is fully independent.

### Implementation

- Feature branch: `feature/demo-pages` (kept intact, not deleted)
- Index page updated with "View demo" and "Source" links for each prototype
- Merged to `master` via fast-forward

## Phase 6: Final Recommendation

### Selected: Prototype 008 — Hybrid Minimal

**Why 008 over 006 (Paco):** Pure sans-serif everywhere makes long articles feel cold. 008 keeps Paco's structural clarity but adds warmth through serif body text.

**Why 008 over 007 (Lee):** Lee's prose-first style is beautiful for a homepage but scales poorly. With 50+ articles and dozens of videos, a flat list of titles with no dates makes browsing difficult. 008 keeps Lee's warmth but adds the structure (dates, year grouping, labeled sections) needed for a content-heavy site.

**008 delivers:**
- Scannable structure as content library grows
- Readable long-form articles (serif body)
- Clear visual hierarchy (sans headings vs serif body)
- Empty background ready for future Three.js 3D canvas layer
- Simple enough to vibe-code new features

### Open Item

Pick one navigation pattern for subpages and commit to it:
- Paco's `_Index` link, or
- Lee's "By [Name]" link

Mixing both across subpages will feel inconsistent.

## Future Roadmap

1. **Promote prototype 008** to production site structure at repo root
2. **Add real content** — replace placeholder articles, videos, and links
3. **Implement 3D background** — HTML5/WebGL canvas layer (Three.js or similar) behind the text content
4. **Custom domain** — optional, add CNAME file and DNS record (still free on GitHub Pages)
5. **Consider headless CMS** — if visual editing becomes desirable later (Decap, Tina, Sanity free tier)

## Tech Stack Summary

| Layer     | Tool                         | Cost         |
| --------- | ---------------------------- | ------------ |
| Framework | Astro                        | Free         |
| Content   | Markdown/MDX (files in repo) | Free         |
| Styling   | Tailwind CSS                 | Free         |
| Hosting   | GitHub Pages                 | Free         |
| CI/CD     | GitHub Actions               | Free         |
| Video     | YouTube/TikTok embeds        | Free         |
| Future 3D | Three.js (planned)           | Free         |
| Total     |                              | **$0/month** |
