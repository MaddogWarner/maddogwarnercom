# maddogwarner.com

Personal site for **MadDogWarner** — IT professional, homelab operator, security obsessive.

Built by MadDogWarner, Claude (architect), and Codex (developer).

---

## Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro 5](https://astro.build) — static output |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via Vite plugin |
| Content | MDX content collections |
| Icons | [Lucide](https://lucide.dev) |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com) via GitHub sync |
| Language | TypeScript (strict) |

---

## Local Development

**Prerequisites:** Node.js 20+, npm

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

---

## Project Structure

```text
src/
├── components/       # Reusable Astro components
├── content/
│   ├── blog/         # MDX blog posts
│   └── projects/     # Project entries (fallback when GitHub API is unavailable)
├── layouts/          # BaseLayout and BlogLayout
├── pages/            # Routes: /, /about, /projects, /blog, /privacy, /data-collection
└── styles/           # global.css — design tokens and base styles
public/
├── _headers          # Cloudflare security headers
├── _redirects        # Cloudflare redirects (/github → GitHub profile)
├── favicon.svg
├── maddog.png        # Site avatar
└── images/           # Static images (hero-bg, og-default, blog post images)
```

---

## Content

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Post Title"
description: "One-sentence description for previews and SEO."
date: 2026-05-20
tags: ["cybersecurity", "homelab"]
draft: false
image: "/images/optional-header-image.png"
---

Post content here. MDX — you can embed components.
```

Set `draft: true` to write without publishing. The post will be excluded from all listings and static routes at build time.

### Adding a Project (fallback)

The projects page fetches live data from the GitHub API at build time. If the API is unavailable it falls back to `src/content/projects/`. Add a `.md` file there only if you need a project listed that isn't on GitHub:

```md
---
name: "repo-name"
description: "What it does."
url: "https://github.com/MaddogWarner/repo-name"
tags: ["homelab", "python"]
language: "Python"
featured: true
---
```

---

## RSS Feed

The blog publishes an RSS feed at `/rss.xml`. It is generated at build time by `@astrojs/rss` and includes all non-draft posts sorted newest first.

Subscribe URL: `https://maddogwarner.com/rss.xml`

The feed updates automatically on every Cloudflare Pages deploy — no manual step needed when a new post is published. RSS readers that support auto-discovery will find the feed from any page on the site.

---

## Build and Deploy

```bash
npm run build     # production build → dist/
npm run preview   # preview the dist/ output locally
npm run check     # Astro + TypeScript type check
```

**Cloudflare Pages settings:**

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `20` |

Every push to `main` triggers a production deploy. Pull request previews are enabled automatically.

---

## Design System

Design tokens are defined in `src/styles/global.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#050508` | Page background |
| `--color-surface` | `#0d0d1a` | Cards and panels |
| `--color-accent` | `#00b4ff` | Electric blue — primary accent |
| `--color-terminal` | `#00ff88` | Terminal green — used sparingly |
| `--color-text` | `#e8eaf0` | Primary text |
| `--color-muted` | `#6b7a99` | Secondary text |

Fonts: **Space Grotesk** (headings) · **Inter** (body) · **JetBrains Mono** (code/terminal)

---

## Security

- Security headers are configured in `public/_headers` (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Static site: no database, no authentication, no server-side execution
- Do not commit credentials, API keys, tokens, or secrets — use Cloudflare Pages environment variables for any future sensitive configuration

---

## Pending

- Generated background images (`hero-bg.png`, `about-bg.png`, `og-default.png`) — see `codex-plan.md` section 9 for spec
- ISSUE-11: duplicate `maddog.png` at project root — confirm removal

---

## License

© 2026 MadDogWarner. All rights reserved.

See the [Copyright](https://maddogwarner.com/copyright/) page for the full statement covering site content, code, and assets.

---

MadDogWarner · Claude · Codex
