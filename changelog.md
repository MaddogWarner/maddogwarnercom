# Changelog

All notable changes to this project will be documented in this file.

This project follows a simple changelog format. Add new entries at the top under a dated heading.

## 2026-06-21

- Published "Context Is Not Free: RAGs, Wikis, Skills, and the Cost of Agentic AI" — covers stale RAG risks, lightweight LLM wikis, skills, subagents, loop/goal usage, and token-aware prompt/context engineering.
- Added an optimised WebP hero image for the article.
- Improved BlogLayout typography: paragraph spacing, responsive H2/H3 sizing with electric-blue H2 top-border rules, tighter heading-to-paragraph gap, better list rhythm, and mobile margin adjustments.
- Draft posts now render in dev mode (`import.meta.env.DEV || !post.data.draft`) for local preview before publish.

---

## 2026-06-12

- Published the "NPM Security: Easy Wins Before the Package Manager Bites You" blog post covering Socket Firewall, lockfile linting, `npm ci`, package hygiene, release-age delays, install-script controls, and git dependency restrictions.
- Added a generated WebP hero image for the NPM security article.

---

## 2026-06-03

- Added `llms.txt` and `auth.md` discovery files for agent-readable site guidance, RSS subscription discovery, contact links, and authentication boundaries.
- Published the "What I Have Learned Building With Codex and Claude" blog post on the two-model Codex/Claude workflow.
- Added the WebP hero image asset for the new AI workflow article.
- Added an SEO title to the new post and added `.DS_Store` to `.gitignore`.

---

## 2026-06-02

- Updated the site Discord social links to use the public server invite URL.

---

## 2026-06-01

- Added a standalone Essential 8 Knowledge Base iOS app privacy policy page at `/privacy/essential-8-knowledge-base/` for App Store Connect and in-app privacy access.
- Marked the app-specific privacy policy page with `noindex, follow` and excluded it from the generated sitemap so it remains public but low-profile.
- Added optional page-level robots metadata support to the shared base layout.

---

## 2026-05-29

- Added SEO-only blog title metadata support so search/social titles can be tuned without changing visible editorial article headings.
- Added sitewide `Person` and `WebSite` JSON-LD plus dynamic `BlogPosting` JSON-LD for blog posts.
- Updated homepage and reviewed blog post meta descriptions for stronger Essential Eight, Windows hardening, PowerShell, credential theft, and sysadmin security search alignment.
- Fixed desktop Blog page tile heights so post cards render as a more consistent two-column grid while preserving natural mobile card sizing.

---

## 2026-05-27

- Added the "Building Better Sysadmin Security Tools: Part 1" blog post introducing the Windows Essential Eight hardening assessment tool as the first instalment in a practical sysadmin security tooling series.
- Documented the tool's current read-only assessment capabilities, including Essential Eight hardening checks, Microsoft Defender Antivirus exclusion review, ASD audit policy checks, and markdown/CSV evidence exports.
- Added roadmap coverage for planned IP range and Active Directory OU-based fleet scanning while preserving the audit-only safety model.
- Added the generated MadDogWarner cyber dog malware USB banner image for the new article.

---

## 2026-05-25

- Added Facebook and Discord social icon links to the site footer alongside the existing GitHub icon.
- Added Facebook and Discord link buttons to the Contact page sidebar alongside the existing GitHub button, all sized to equal width.
- Updated homepage meta description from a 50-character stub to a full 144-character description so Google uses the tag rather than scraping page body content.
- Updated homepage page title to "MadDogWarner | Cyber Security Blog" for clearer Google search result labelling.

---

## 2026-05-22

- Limited the Projects page to the four most recent repositories and added a GitHub profile link for the full project list.
- Added a Web3Forms contact page with hCaptcha integration, navigation entry, CSP allowances, and updated privacy/data collection notices.
- Converted served PNG artwork and avatar assets to optimised WebP files, reducing the changed image set from 16.4 MB to 970 KB and updating page and blog metadata references.
- Added the "Three Windows Controls That Make Credential Theft Harder" blog post covering LSASS hardening, ASD Essential Eight control context, and PowerShell verification examples.
- Added the generated Windows credential-theft article image showing a blocked hacker cat behind jail bars.
- Added RSS feed at `/rss.xml` via `@astrojs/rss`: auto-generated at build time, includes all non-draft blog posts sorted by date.
- Added RSS auto-discovery `<link>` in `BaseLayout.astro` so RSS readers detect the feed from any page.
- Added RSS subscribe link in the blog index page header and in the site footer.

---

## 2026-05-21

- Added copyright and license notice to `readme.md` referencing the Copyright page.
- Added a generated blog hero image and responsive Blog page hero layout.
- Added image-load-triggered terminal typing animation for the Blog page `>sudo blogs.sh` overlay.
- Added a generated Projects page hero image showing the MadDogWarner cyber dog repairing a malware-infected server.
- Updated the Projects page with a responsive hero layout matching the Blog page treatment.
- Fixed GitHub API fetch on home and projects pages: added optional `GITHUB_TOKEN` auth header to avoid rate-limit failures on Cloudflare build servers, bumped `per_page` to 100, and filtered the `maddogwarnercom` repo from project listings.
- Removed duplicate `maddog.png` from project root (ISSUE-11). `public/maddog.png` remains as the served asset.

---

## 2026-05-20

### Added

- Added a dedicated Copyright page with an Australian-law-aligned copyright statement and third-party/AI-assistance caveats.
- Added Astro sitemap generation via `@astrojs/sitemap`.
- Added `robots.txt` with a sitemap reference for search crawlers.
- Added a generated server-zap article image for the Hello World launch post.
- Added complete Open Graph, canonical URL, favicon, and Twitter card metadata.
- Added a static SVG favicon.
- Added the "Essential Eight Needs Better Sysadmin Tooling" blog post with ASD/Microsoft references, PowerShell audit examples, and a generated article image.
- Added optional blog post header image rendering for posts that define an `image` frontmatter value.
- Built the initial Astro 5 static site with Tailwind CSS, TypeScript, MDX content collections, and Cloudflare Pages support.
- Added Home, About, Projects, Blog, Privacy, and Data Collection pages.
- Added reusable site components for navigation, footer, hero, avatar frame, project cards, blog cards, tag badges, section headers, buttons, and terminal blocks.
- Added Cloudflare `_headers` and `_redirects` files.
- Added placeholder blog and project content.
- Created initial `readme.md`.
- Created initial `changelog.md`.
- Documented the current project state and existing `maddog.png` asset.

### Changed

- Updated the footer copyright mark to "© 2026 MadDogWarner. All rights reserved." and added a Copyright legal link.
- Turned the Codex crew card into an expandable bio with a self-aware implementation-focused write-up.
- Updated About page Skills and Focus Areas behaviour so skill cards auto-expand together on desktop while preserving mobile tap interaction.
- Tuned the About skills cards so desktop shows focus details by default while mobile keeps tap-to-expand behaviour.
- Expanded the About page skills section into native accordion cards with practical focus-area bullet points.
- Refreshed the About page bio and profile tags with a more informal healthcare infrastructure and cyber security focus.
- Made the Blog tag filter interactive with vanilla JavaScript.
- Corrected the site launch post date to `2026-05-20`.
- Fixed blog post reading time calculation to use raw MDX body content.
- Replaced the deprecated Lucide `Code2` icon with `SquareCode`.
- Moved active Tailwind v4 design tokens into `global.css` via `@theme` and reduced `tailwind.config.mjs` to a minimal compatibility stub.
- Removed the contradictory `packageManager` field so the npm lock file is authoritative for local and Cloudflare builds.
- Added a CSS-backed reveal animation for `TerminalBlock` when `typing` is enabled.
- Updated the Home page recent projects section to query the latest GitHub repositories for `MadDogWarner` at build time, with local content fallback.
- Fixed the About page avatar and bio layout overlap on narrower viewports.
- Updated the footer to include Privacy and Data Collection links.

### Notes

- Local development currently uses `npm` because `pnpm` and `corepack` are not installed on the machine.
- Generated image assets listed in `codex-plan.md` are still pending.
