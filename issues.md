# issues.md — Claude Code Review

> Reviewed by Claude against `codex-plan.md` and the built source.
> Last updated by Codex: 2026-05-20.

---

## Open Issues

### ISSUE-11 · `maddog.png` duplicated at project root

**Files:** `/maddog.png` (root), `/public/maddog.png`

The avatar exists at both locations. The root copy is not served by the build — only `public/maddog.png` is.

Status: open. This is safe to remove once confirmed, but it is a destructive file operation and was not performed without explicit confirmation.

---

## Resolved

- ISSUE-01: Added complete Open Graph and Twitter card metadata.
- ISSUE-02: Made the Blog tag filter interactive.
- ISSUE-03: Updated `hello-world.mdx` to `2026-05-20`.
- ISSUE-04: Fixed reading time calculation using raw MDX body content.
- ISSUE-05: Added `public/favicon.svg` and favicon metadata.
- ISSUE-06: Added canonical URL metadata.
- ISSUE-07: Moved Tailwind v4 tokens into `global.css` and reduced `tailwind.config.mjs` to a minimal compatibility stub.
- ISSUE-08: Removed the contradictory `packageManager` field so the npm lock file is authoritative.
- ISSUE-09: Implemented `TerminalBlock` typing animation.
- ISSUE-10: Replaced deprecated `Code2` icon with `SquareCode`.

---

## Current Validation

- `npm run check`: passing, 0 errors, 0 warnings, 0 hints.
- `npm run build`: passing, 8 pages built.

Known build warnings:

- `public/images/hero-bg.png` is still pending.
- `public/images/about-bg.png` is still pending.

---

*Review by Claude | Updated by Codex | 2026-05-20*
