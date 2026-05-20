# Changelog

All notable changes to this project will be documented in this file.

This project follows a simple changelog format. Add new entries at the top under a dated heading.

## 2026-05-20

### Added

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
