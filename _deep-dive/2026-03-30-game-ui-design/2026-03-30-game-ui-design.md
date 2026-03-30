# Game UI Design

Applying video game interface aesthetics to personal website design. Covers the design language research, CSS implementation techniques, and content mapping patterns used for demos 009-011.

## Core Insight: Game Concepts Map to Website Sections

The key to making game-UI websites feel like real personal sites (not just mockups) is mapping game mechanics to website content semantically:

| Game Mechanic    | Website Equivalent     | Why It Works                             |
| ---------------- | ---------------------- | ---------------------------------------- |
| Character Status | About/Bio              | Both display identity and key attributes |
| Skill/Stat Bars  | Proficiency indicators | Visual, quantified self-assessment       |
| Quest Log        | Projects               | Active/completed framing adds narrative  |
| Inventory Grid   | Tools & Technologies   | Collection metaphor fits naturally       |
| Achievements     | Accomplishments        | Gamification of real milestones          |
| Party Members    | Social Links/Contact   | Relationships as team composition        |
| Save Point       | Footer                 | Satisfying closure with game language    |

This is a living-document table — add rows as new contexts are identified.

## Persona 3 Reload — Design Language

### Color Palette

| Token        | Hex     | Usage                                         |
| ------------ | ------- | --------------------------------------------- |
| Primary blue | #1269cc | Main accent, panel highlights                 |
| Soft blue    | #6d9ac7 | Secondary backgrounds, gradient component     |
| Cyan         | #51eefc | Highlights, hover states, decorative elements |
| Dark         | #0d1117 | Base background                               |
| White        | #ffffff | Text                                          |
| Muted        | #5a7a9a | Secondary text                                |

This is a living-document table — add rows as new contexts are identified.

### Visual Philosophy

- **Aquatic/underwater metaphor** — everything moves slowly, like floating through water
- **Glass-like reflections** — glassmorphism panels with `backdrop-filter: blur(12px)`
- **Contemplative mood** — spacious layouts, light font weights, wide letter-spacing
- **Moon/Dark Hour imagery** — crescent moon as decorative motif
- **Geometric accents** — concentric circles, triangles at section edges

### Key CSS Techniques

- **Water shimmer**: Animated `linear-gradient` with `background-size: 400%` shifting over 12-15s
- **Glass panels**: `backdrop-filter: blur(12px)` + `rgba()` backgrounds + cyan border at 15% opacity
- **Card flips**: `perspective: 800px` container, `backface-visibility: hidden` + `rotateY(180deg)` on hover
- **Slow transitions**: `0.6s cubic-bezier(0.4, 0, 0.2, 1)` everywhere
- **Typography**: IBM Plex Sans, light weight (300) headings with `letter-spacing: 0.15em`, uppercase

### P3R Section Naming

| Section  | P3R Concept | Meaning                                            |
| -------- | ----------- | -------------------------------------------------- |
| About    | Status      | Character status screen                            |
| Social   | S-Links     | Social Links (in-game relationship system)         |
| Projects | Tartarus    | The tower dungeon players climb floor by floor     |
| Writing  | Calendar    | The in-game calendar tracking daily activities     |
| Skills   | Velvet Room | The mystical room where Personas are fused/managed |

This is a living-document table — add rows as new contexts are identified.

## Persona 5 Royal — Design Language

### Color Palette

| Token    | Hex     | Usage                                          |
| -------- | ------- | ---------------------------------------------- |
| Red      | #FF0000 | Dominant accent, section backgrounds           |
| Red dark | #CC0000 | Hover states, secondary red                    |
| Black    | #0D0D0D | Base background, text                          |
| White    | #FFFFFF | High-contrast text                             |
| Yellow   | #F2E852 | Highlights, active states, calling card accent |
| Muted    | #888888 | Secondary text                                 |

This is a living-document table — add rows as new contexts are identified.

### Visual Philosophy

- **Rebellion and boldness** — high contrast, sharp angles, nothing subtle
- **Punk rock zine meets manga** — ransom-note typography, halftone dots, comic speech bubbles
- **Zero rounded corners** — `border-radius: 0` enforced globally; angular `clip-path` polygons instead
- **Split compositions** — sections alternate black and red backgrounds
- **Explosive energy** — elements slide in at angles with rotation

### Key CSS Techniques

- **Extreme skew**: `transform: skewX(-4deg)` on containers, `skewX(4deg)` counter-correction on content
- **Angular clip-paths**: `clip-path: polygon(0 0, calc(100%-24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100%-24px))` for cut corners
- **Halftone overlay**: `radial-gradient(circle, rgba(255,0,0,0.15) 1px, transparent 1px); background-size: 6px 6px`
- **Ransom typography**: `font-weight: 900; font-style: italic; transform: skewX(-12deg)` with individual letter `<span>` wrapping for size/rotation variation
- **Thick text outlines**: Multi-directional `text-shadow` (8 directions at 1-3px offsets)
- **Calling card**: Jagged `clip-path` with irregular polygon points for torn-edge effect
- **Font**: Arial Bold Italic (system font, no external dependency)

### P5R Section Naming

| Section     | P5R Concept  | Meaning                                     |
| ----------- | ------------ | ------------------------------------------- |
| About/Hero  | Hideout      | The Phantom Thieves' secret meeting place   |
| Social      | Confidants   | The in-game relationship/bond system        |
| Projects    | Palaces      | Cognitive worlds the team infiltrates       |
| Writing     | Schedule     | The in-game daily planner                   |
| Skills      | Metaverse    | The alternate reality where powers manifest |
| Contact CTA | Calling Card | The declaration sent to corrupt targets     |

This is a living-document table — add rows as new contexts are identified.

## Generic RPG UI (Demo 009)

Not tied to any franchise. Uses universal RPG tropes:
- **Color**: Dark blue-black (#0a0a1a) + neon green (#00ff88) + neon pink (#ff3366)
- **Font**: "Press Start 2P" pixel font for headings, monospace for body
- **Effects**: CRT scanlines, glow text-shadow, animated stat bars, HUD corner brackets
- **Always dark** — video game menus don't have light mode

## Sources

### P3R
- Game UI Database — Persona 3 Reload
- Persona Central — P3R developer interview on menu/UI design
- AUTOMATON WEST — P3R's "sexy UI" coverage
- Color Hex — P3R color palette (#1043675)
- Game Font Library — confirmed IBM Plex Sans JP

### P5R
- Ridwan Khan — "The UI and UX of Persona 5" (interaction design analysis)
- Medium Design Bootcamp — "How Persona 5's UI balances style and substance"
- Xiaohai Liu — "Visual Design of Games: Persona 5 Royal" (practice & analysis)
- Cook and Becker — "Persona 5's bombastic art direction"
- Game UI Database — Persona 5 Royal
- Color Hex — Phantom Thieves color palette (#1019867)
