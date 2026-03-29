# Design Direction

## Decision

The portfolio will follow the ultra-minimal, text-first philosophy exemplified by **Paco Coursey** (paco.me) and **Lee Robinson** (leerob.com). The background will be kept clean/empty intentionally — to allow future implementation of an HTML5 3D background layer.

## Why These Two

Both sites share a core philosophy: **the content IS the design**. No hero images, no card grids, no visual noise. Just text, links, and whitespace. This approach is:

- Fastest to load
- Easiest to maintain
- Most vibe-coding friendly (simple HTML/CSS, no complex layouts)
- Leaves the background layer free for a future 3D canvas (Three.js, etc.)
- Ages well — no trends to chase

## Paco Coursey — paco.me

### Structure
- Single-page homepage with sections: intro, building (current projects), projects, writing, now, connect
- `/writing` — articles grouped by year, each with date + optional description
- `/craft` — interactive demos grouped by category (Motion, CSS, Interaction)
- No traditional navbar — flat architecture with inline links

### Design Patterns
- **No nav bar** — just an `_Index` link on subpages to go home
- **Monochromatic** — near-black text on white (or inverted in dark mode)
- **System/custom sans-serif font** — clean, no decorative fonts
- **Sections on homepage** are just headings + lists of links
- **Articles listed with**: title, date (month/day), optional short description, grouped by year
- **Footer**: philosophical tagline ("Pray at the altar of hard work") + email + Twitter
- **Dark mode** via next-themes

### What Makes It Special
- The homepage reads like a personal index — every section is a concise list
- Craft page shows interactive demos (animations, CSS effects) — the portfolio IS the work
- Extreme restraint — nothing is there unless it earns its place

## Lee Robinson — leerob.com

### Structure
- Single-page homepage: intro paragraphs, featured writing (6 articles), call-to-action with social links
- `/writing` — flat list of all articles (no dates, no descriptions on listing page)
- No traditional navbar — "By Lee Robinson" link on subpages

### Design Patterns
- **Serif font** (Stix Two Text) — editorial, literary feel
- **Prose-first** — homepage is literally paragraphs of text with inline links
- **No metadata on article listings** — just titles, no dates or tags
- **Social links woven into prose** — "you can follow me on X, watch my videos on YouTube"
- **Tailwind CSS** — utility-first styling
- **Dark/light mode** with localStorage persistence
- **Link styling**: underlined with neutral-500 decoration, subtle hover transitions

### What Makes It Special
- Feels like reading a letter, not browsing a website
- The introduction is conversational — "I'm the VP of Developer Experience at Vercel"
- Featured writing is curated (only 6 posts on homepage), full list on /writing
- Spotify "now playing" adds a human touch
- No footer — the page just ends with a contact paragraph

## Shared Principles (What to Adopt)

| Principle       | Paco                       | Lee                    | Our Approach                               |
| --------------- | -------------------------- | ---------------------- | ------------------------------------------ |
| Navigation      | No navbar, inline links    | No navbar, byline link | No navbar — inline navigation              |
| Typography      | Sans-serif, clean          | Serif, editorial       | TBD — test both                            |
| Content listing | Title + date + description | Title only             | Title + date (description optional)        |
| Homepage        | Section-based index        | Prose paragraphs       | Hybrid — short prose intro + section links |
| Color           | Monochrome + dark mode     | Monochrome + dark mode | Monochrome + dark mode                     |
| Background      | Clean, empty               | Clean, empty           | Clean initially, 3D canvas layer later     |
| Social links    | Footer (email, Twitter)    | Inline in prose        | Inline or minimal footer                   |
| Article pages   | Individual pages           | Individual pages       | Individual pages from Markdown             |

## Future: 3D Background Layer

Both sites leave the background completely clean — solid color, no gradients, no patterns. This is intentional for our project: the clean background becomes a canvas for a future HTML5/WebGL 3D background using Three.js or similar. The text content sits on top as a semi-transparent or solid panel. This layered approach means:

1. Build the portfolio first with clean, Paco/Lee-style minimalism
2. Add the 3D background as a separate, independent layer later
3. The 3D layer enhances but never blocks readability
4. Can be toggled off for accessibility/performance

## Tech Stack Confirmation

- **Astro** with Content Collections for Markdown articles
- **Tailwind CSS** for styling
- **GitHub Pages** for free hosting
- **Three.js or similar** (future) for 3D background
