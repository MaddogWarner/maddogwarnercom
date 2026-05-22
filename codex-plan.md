# maddogwarner.com — Codex Build Brief

> Authored by Claude. Implemented by Codex.
> This is the full specification for building the MadDogWarner personal site.

---

## 1. Project Overview

A personal site for **MadDogWarner** — an IT professional focused on dev, homelab, and cybersecurity.
Built as a static site, deployed to **Cloudflare Pages** via GitHub sync.

Content: About, Projects (linked to GitHub), Blog.
Brand voice: edgy, technically credible, not cringe. Think security researcher's portfolio, not a corporate brochure.

**No real name anywhere on the site.** Identity is always: MadDogWarner, Claude, and Codex.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Astro 5** | Static-first, content collections, MDX, Cloudflare-native adapter, islands for selective hydration |
| Styling | **Tailwind CSS v4** | Utility-first, easy dark theme, good purging |
| Language | **TypeScript** | Type safety throughout |
| Content | **MDX** (via Astro content collections) | Blog posts with component embeds |
| Deployment | **Cloudflare Pages** | Git-synced, global CDN, generous free tier |
| Package manager | **pnpm** | Fast, disk-efficient |

No SSR. Pure static output (`output: 'static'`). No database. No auth.

---

## 3. Repository Structure

```
maddogwarnercom/
├── public/
│   ├── _headers                  ← Cloudflare security headers
│   ├── _redirects                ← Any redirect rules
│   ├── maddog.png                ← Primary avatar (existing)
│   ├── favicon.ico
│   └── images/
│       ├── hero-bg.png           ← Codex to generate
│       ├── about-bg.png          ← Codex to generate
│       ├── blog-placeholder.png  ← Codex to generate
│       └── og-default.png        ← Codex to generate (1200×630 OG image)
├── src/
│   ├── components/
│   │   ├── NavBar.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogCard.astro
│   │   ├── TagBadge.astro
│   │   ├── TerminalBlock.astro
│   │   ├── GlowButton.astro
│   │   ├── SectionHeader.astro
│   │   ├── AvatarFrame.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts             ← Content collection schemas
│   │   ├── blog/
│   │   │   └── hello-world.mdx   ← Placeholder first post
│   │   └── projects/
│   │       └── example-project.md ← Placeholder project entry
│   ├── layouts/
│   │   ├── BaseLayout.astro      ← HTML shell, head, nav, footer
│   │   └── BlogLayout.astro      ← Post layout with metadata
│   ├── pages/
│   │   ├── index.astro           ← Home
│   │   ├── about.astro           ← About
│   │   ├── projects.astro        ← Projects
│   │   └── blog/
│   │       ├── index.astro       ← Blog listing
│   │       └── [...slug].astro   ← Post renderer
│   └── styles/
│       └── global.css            ← Tailwind base + custom CSS vars
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 4. Design System

### 4.1 Colour Palette

Derived from the MadDogWarner avatar: dark near-black field, electric blue glow, white text.

```css
/* global.css — CSS custom properties */
:root {
  --color-bg:         #050508;   /* near-black, slight blue tint */
  --color-surface:    #0d0d1a;   /* card/panel background */
  --color-border:     #1a1a3e;   /* subtle dark blue border */
  --color-accent:     #00b4ff;   /* electric blue — primary accent */
  --color-accent-dim: #0066aa;   /* darker blue for hover states */
  --color-glow:       rgba(0, 180, 255, 0.18); /* box-shadow glow */
  --color-text:       #e8eaf0;   /* primary text */
  --color-muted:      #6b7a99;   /* secondary/muted text */
  --color-terminal:   #00ff88;   /* terminal green — use sparingly */
}
```

Tailwind config should extend with these as named tokens (`accent`, `surface`, `glow` etc).

### 4.2 Typography

```
Headings:   Space Grotesk (Google Fonts) — modern, geometric, technical
Body:       Inter (Google Fonts) — clean, readable
Monospace:  JetBrains Mono (Google Fonts) — terminals, code, badges
```

Load via `<link>` in BaseLayout head. Subset to Latin only for performance.

### 4.3 Visual Language

- **Backgrounds:** Pure black with subtle radial blue glow behind focal elements
- **Cards:** Dark surface (#0d0d1a), 1px border (#1a1a3e), hover → border brightens to accent, faint glow shadow
- **Buttons:** Outlined with accent colour + glow on hover. Filled variant for primary CTAs.
- **Terminal elements:** Monospace font, terminal green text, `>` prompt prefix, faint scanline CSS overlay
- **Icons:** Lucide icons (via `@lucide/astro`) — lock, shield, terminal, server, git-branch
- **Glow effects:** `box-shadow: 0 0 20px var(--color-glow)` on cards/buttons when focused/hovered
- **Scanlines:** CSS pseudo-element overlay on the avatar image (subtle, not distracting)
- **No gradients that look like 2017 Bootstrap** — keep it dark and sharp

---

## 5. Pages & Components

### 5.1 Home (`index.astro`)

**Hero section**
- Full viewport height
- Left: Avatar (`maddog.png`) in a circular frame with:
  - Animated blue ring (CSS keyframe pulse)
  - Faint scanline overlay
  - Lock shield badge in corner
- Right:
  - `> MadDogWarner` in terminal green monospace, then cursor blink
  - Tagline (typewriter animation): cycles through "Hacking. Defending. Building."
  - Sub-tagline: "IT professional. Homelab operator. Security obsessive."
  - Two GlowButtons: [View Projects] [Read the Blog]
- Background: `hero-bg.png` (dark cyber grid) at low opacity, or CSS grid/circuit pattern

**Featured Projects strip** (3 cards, latest from GitHub)
- SectionHeader: `// recent.projects`
- 3 × ProjectCard
- [View all projects →] link

**Latest Posts strip** (2–3 cards)
- SectionHeader: `// latest.posts`
- 2–3 × BlogCard
- [Read the blog →] link

**Terminal-style "stack" callout**
- A TerminalBlock showing:
  ```
  > whoami
  MadDogWarner
  > cat /etc/team
  Claude   [architect]
  Codex    [developer]
  > uptime
  always scanning
  ```

### 5.2 About (`about.astro`)

**Hero strip**
- Dark background with subtle `about-bg.png`
- Heading: `// about.md`
- Sub-heading: "MadDogWarner and the crew"

**MadDogWarner section**
- Avatar image (left) + bio text (right)
- Placeholder bio (to fill in later):
  ```
  IT professional by trade. Homelab operator by passion.
  Security researcher by necessity.

  [placeholder — update with personal background, certifications, focus areas]
  ```
- Tag badges: `#homelab` `#cybersecurity` `#netops` `#devops`

**The Crew section**
Two cards side by side:

*Claude* card:
- Role: AI Architect & Advisor
- Description: Plans the builds, reviews the code, writes the briefs. Anthropic's Claude — the brains behind the blueprint.
- Icon: brain/sparkle

*Codex* card:
- Role: AI Developer
- Description: Turns the plan into working code. OpenAI's Codex — fingers on the keyboard, always shipping.
- Icon: terminal/code

Footer note: "All three of us built this site."

**Skills/Focus areas** (icon grid)
- Network Security | Penetration Testing | Homelab Infrastructure | DevOps | Threat Detection | SIEM/Logging

### 5.3 Projects (`projects.astro`)

**Header:** `// projects.index`

**GitHub integration (build-time fetch)**

In `projects.astro`, fetch from GitHub API at build time:

```typescript
const res = await fetch('https://api.github.com/users/MadDogWarner/repos?sort=updated&per_page=20');
const repos = await res.json();
// filter out forks, sort by updated_at
```

Falls back to content collection data in `src/content/projects/` if API is unavailable or returns an error.

Each **ProjectCard** shows:
- Repo name (monospace, accent colour)
- Description
- Language badge (colour-coded: Python=blue, Go=cyan, Shell=green, etc.)
- Stars count
- Last updated (relative date)
- Topic tags as TagBadges
- [View on GitHub →] button

Layout: responsive CSS grid, 1 col mobile → 2 col tablet → 3 col desktop.

### 5.4 Blog (`blog/index.astro` + `[...slug].astro`)

**Blog index**
- Header: `// blog.posts`
- Filter by tag (client-side, no JS framework — native `<details>` or simple vanilla toggle)
- Grid of BlogCards
- Each card: title, date, tags, excerpt (first 150 chars of content), [Read →]

**Blog post layout (`BlogLayout.astro`)**
- Progress bar at top (scroll indicator — small vanilla JS snippet)
- Breadcrumb: Home > Blog > Post Title
- Title + date + tags
- Reading time (calculated from word count)
- Prose content (Tailwind `prose` plugin with dark theme override)
- Code blocks: Shiki syntax highlighting, theme `github-dark`
- Author footer: "Written by MadDogWarner | Assisted by Claude & Codex"

**Content collection schema (`src/content/config.ts`)**

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    tags: z.array(z.string()),
    language: z.string().optional(),
    stars: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
```

---

## 6. Components Spec

### NavBar.astro
- Sticky top, `backdrop-filter: blur(12px)`, semi-transparent dark background
- Logo: `MadDogWarner` in Space Grotesk bold + small lock icon
- Links: Home | About | Projects | Blog
- Mobile: hamburger → full-screen overlay menu (vanilla JS toggle)
- Active link: accent colour underline

### GlowButton.astro
Props: `href`, `variant: 'outline' | 'filled'`, `external?: boolean`
- Outline: transparent fill, accent border, accent text, glow on hover
- Filled: accent fill, dark text, brighter glow on hover
- If `external`: adds `target="_blank" rel="noopener noreferrer"` and external link icon

### TagBadge.astro
Props: `tag: string`
- Pill shape, monospace font, dark background, accent border
- Colour variants by category: security=blue, homelab=green, dev=purple (defined in a tag-colour map)

### TerminalBlock.astro
Props: `lines: string[]`, `typing?: boolean`
- Dark panel with subtle border
- Top bar with three dots (mac-style) in muted colours
- Monospace text, terminal green for output, muted for prompts
- Optional `typing` prop to animate text appearing line by line

### ProjectCard.astro
Props: `repo` object (name, description, language, stars, url, topics, updatedAt)
- Surface card with border
- Hover: border → accent colour, glow shadow
- Entire card is a link

### BlogCard.astro
Props: `post` object (title, date, tags, excerpt, slug)
- Same card styling as ProjectCard
- Date in muted text, title in accent on hover

### AvatarFrame.astro
- Circular crop of `maddog.png`
- Blue ring animation (CSS keyframe, ~3s pulse)
- Inner scanline overlay (CSS repeating-linear-gradient, ~2px lines, 3% opacity)
- Lock badge bottom-right corner

### Footer.astro
- Dark background, top border in accent with low opacity
- Left: copyright `© 2025 MadDogWarner`
- Centre: `Built with Astro + Tailwind by MadDogWarner, Claude & Codex`
- Right: GitHub icon link
- Bottom tagline: "Scanning for vulnerabilities… none found."

---

## 7. Cloudflare Pages Config

**Build settings (Cloudflare Pages dashboard):**

```
Build command:     pnpm build
Build output dir:  dist
Root dir:          /
Node version:      20
```

**`public/_headers`** (applied to all routes):

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'
```

**`public/_redirects`:**

```
/github    https://github.com/MadDogWarner    301
```

---

## 8. `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://maddogwarner.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
```

---

## 9. Image Generation Brief for Codex

Generate the following images in the same aesthetic as `maddog.png` — dark background, electric blue (`#00b4ff`) as the hero colour, high-detail digital illustration style.

### Image generation status

- [ ] `public/images/hero-bg.png` — pending original background asset.
- [ ] `public/images/about-bg.png` — pending original background asset.
- [ ] `public/images/blog-placeholder.png` — pending original fallback thumbnail asset.
- [ ] `public/images/og-default.png` — pending original Open Graph asset.
- [x] `public/images/hello-world-server-zap.png` — generated article image for the Hello World launch post.
- [x] `public/images/essential-eight-sysadmin-audit-tool.png` — generated article image for the Essential Eight post.
- [x] `public/images/essential-eight-uplift-ios-icon-1024.png` — generated iOS icon concept asset.
- [x] `public/images/essential-eight-uplift-ios-icon-concept.png` — generated iOS icon concept asset.
- [x] `public/images/blog-hero.png` — generated Blog page hero image.
- [x] `public/images/projects-hero.png` — generated Projects page hero image.

### `public/images/hero-bg.png` (1920×1080)
Dark background. Abstract cyber-grid or PCB circuit board pattern in very deep navy (#0d0d1a). Faint blue trace lines and node dots. Subtle depth — slightly brighter toward centre. NOT busy — this sits behind text so must be subtle. No characters, no faces.

### `public/images/about-bg.png` (1920×600)
Dark background. Silhouette of a server rack or homelab setup (shapes only, no fine detail) from a low angle. Blue accent lighting from below. Atmospheric, moody.

### `public/images/blog-placeholder.png` (1200×630)
Generic dark blog thumbnail. Abstract blue binary rain or a terminal window with scrolling output. Subtle MadDogWarner logo watermark bottom-right. Used as fallback OG image for posts without a custom image.

### `public/images/og-default.png` (1200×630)
Open Graph image for social sharing. Dark background. MadDogWarner avatar (the dog, from `maddog.png`) left side, large. Right side: "MadDogWarner" in Space Grotesk bold, white. Tagline below in accent blue: "Hacking. Defending. Building." Clean, no clutter.

---

## 10. Placeholder Content

### `src/content/blog/hello-world.mdx`

```mdx
---
title: "Hello World — Site Launch"
description: "MadDogWarner.com is live. Here's what to expect."
date: 2025-05-20
tags: ["meta", "site"]
draft: false
---

The site is up. Built with Astro, styled with Tailwind, deployed on Cloudflare Pages.
Designed by Claude. Developed by Codex. Operated by MadDogWarner.

Expect posts on:
- Homelab builds and network architecture
- Cybersecurity tooling and techniques
- Dev projects and automation
- The occasional rant about enterprise software

Stay tuned.

— MadDogWarner
```

### `src/content/projects/example-project.md`

```md
---
name: "example-repo"
description: "Placeholder — replace with real GitHub project data."
url: "https://github.com/MadDogWarner/example-repo"
tags: ["homelab", "python"]
language: "Python"
featured: true
---
```

---

## 11. Dependencies (`package.json`)

```json
{
  "name": "maddogwarnercom",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/mdx": "^4.0.0",
    "@astrojs/tailwind": "^6.0.0",
    "@lucide/astro": "^0.400.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@astrojs/check": "^0.9.0"
  }
}
```

---

## 12. Implementation Order for Codex

1. `pnpm create astro@latest` — empty template, TypeScript strict mode
2. Install dependencies (Tailwind v4, MDX, Lucide)
3. Configure `astro.config.mjs` and `tailwind.config.mjs`
4. Write `src/styles/global.css` with CSS vars and Tailwind base
5. Build `BaseLayout.astro` (HTML shell, Google Fonts, NavBar, Footer)
6. Build all components (NavBar, Footer, GlowButton, TagBadge, TerminalBlock, AvatarFrame, ProjectCard, BlogCard, SectionHeader)
7. Build pages in order: `index.astro` → `about.astro` → `projects.astro` → `blog/index.astro` → `blog/[...slug].astro`
8. Set up content collections (`config.ts`) and add placeholder content
9. Add `public/_headers` and `public/_redirects`
10. Generate and add images (hero-bg, about-bg, blog-placeholder, og-default)
11. Run `pnpm build` — must complete with zero errors, zero TypeScript errors
12. Verify Cloudflare Pages build settings match section 7

---

## 13. GitHub Repository Setup

- Repo name: `maddogwarnercom`
- Visibility: Public (Cloudflare Pages free tier requires public or paid plan)
- Default branch: `main` — every push triggers a Cloudflare Pages deploy
- Preview deployments: enabled for PRs (automatic via Cloudflare)
- `.gitignore`: standard Astro template (node_modules, dist, .env)

---

---

## 14. Contact Page

### Context

Add a `/contact/` page so visitors can send messages without exposing the Proton Mail address to spam harvesters. Uses Web3Forms (free, 250 submissions/month) to forward submissions to `maddogwarner@proton.me`. Spam protection via Web3Forms' built-in hCaptcha (zero-config, no separate hCaptcha account needed).

---

### Files to create / modify

| File | Action |
| --- | --- |
| `src/pages/contact.astro` | **Create** |
| `src/components/NavBar.astro` | **Modify** — add Contact link |
| `changelog.md` | **Modify** — add entry |

No new npm dependencies.

---

### NavBar update

Add to the `links` array in `src/components/NavBar.astro` after Blog:

```ts
{ href: '/contact/', label: 'Contact' },
```

---

### Page structure

```text
BaseLayout (title="Contact", description="Get in touch with MadDogWarner — IT professional, homelab operator, and security obsessive.")
└── <script type="application/ld+json"> — ContactPage schema (see below)
└── <section class="section">
    └── <div class="container">
        ├── SectionHeader eyebrow="// contact.sh" title="Contact"
        └── Two-column grid (desktop ~40/60; mobile stacked)
            ├── Left — surface-card: contact info
            │   ├── Intro: "Have a question, collaboration idea, or want to talk shop?"
            │   ├── GitHub link (GitBranch icon + "MadDogWarner on GitHub")
            │   └── Small note: "Replies come from maddogwarner@proton.me"
            └── Right — surface-card: contact form
                └── <form id="contact-form">
                    ├── hidden input name="access_key"   value="{WEB3FORMS_ACCESS_KEY}"
                    ├── hidden input name="subject"      value="New contact — maddogwarner.com"
                    ├── hidden input name="from_name"    value="MadDogWarner Contact"
                    ├── hidden input name="redirect"     value="false"
                    ├── Name field        (required)
                    ├── Email field       (type="email", required)
                    ├── Subject field     (required)
                    ├── Message textarea  (required, rows=5)
                    ├── <div class="h-captcha" data-captcha="true" data-theme="dark">
                    └── Submit button ("Send message")
                └── Inline result area (hidden until submission)
```

The `{WEB3FORMS_ACCESS_KEY}` placeholder must be replaced with the real key before implementation. David will supply it.

---

### JSON-LD schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact MadDogWarner",
  "url": "https://maddogwarner.com/contact/"
}
</script>
```

Place this inside `<BaseLayout>` or via a `<slot name="head">` if BaseLayout supports it — otherwise inline it just after the opening `<body>` tag.

---

### Script tags (before `</body>`)

Web3Forms handles hCaptcha loading — one script tag is all that's needed:

```html
<script src="https://web3forms.com/client/script.js" async defer></script>
```

Do **not** add a separate hCaptcha script.

---

### JavaScript behaviour (`<script>` block in `contact.astro`)

```text
1. On form submit → event.preventDefault()
2. Guard: check form.querySelector('textarea[name=h-captcha-response]').value
   — if empty: show "Please complete the captcha" message, abort
3. Disable submit button, set label to "Sending…"
4. Collect FormData → JSON.stringify → POST to https://api.web3forms.com/submit
   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
5. If data.success === true:
   — show success message (--color-terminal green)
   — form.reset()
   — hcaptcha.reset()
   — re-enable submit button
6. On error or data.success === false:
   — show error message (red/warning tone, e.g. #ff4d4d)
   — re-enable submit button
```

---

### Styling conventions

Follow existing site patterns exactly:

- `surface-card` class for both panels
- Form inputs: `background: rgba(13,13,26,0.88)`, `border: 1px solid rgba(0,180,255,0.34)`, accent focus ring
- Labels: `mono` class, small, `var(--color-muted)`
- Submit button: accent border, glow on hover — match existing CTA button style
- Success text: `var(--color-terminal)` (#00ff88)
- Error text: `#ff4d4d` (inline, no new design token)
- Mobile: single column, form card full-width

---

### hCaptcha activation (David's responsibility — before Codex commits)

1. In the Web3Forms dashboard (`app.web3forms.com`): open the form → enable hCaptcha as the preferred captcha method
2. This is a dashboard toggle — no code change needed

> **UX note:** hCaptcha free tier can present challenging puzzles. If this becomes a user complaint post-launch, the fallback option is a hidden honeypot field. That's a future decision, not a blocker.

---

### Verification checklist

- [ ] `npm run check` — 0 TypeScript errors
- [ ] `npm run build` — 11 pages (was 10), `dist/contact/index.html` present
- [ ] `/contact/` renders locally — both panels visible, hCaptcha widget loads
- [ ] Test submission received in Proton Mail (`maddogwarner@proton.me`)
- [ ] Submission without completing hCaptcha — client-side guard blocks it
- [ ] Contact link in NavBar is active on `/contact/`, appears in mobile hamburger menu
- [ ] JSON-LD validates at Google Rich Results Test

---

*Plan authored by Claude | Implementation by Codex | Site for MadDogWarner*
