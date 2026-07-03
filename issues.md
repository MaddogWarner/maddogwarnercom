# issues.md — Claude Code Review

> Reviewed by Claude against `codex-plan.md` and the built source.
> Last updated by Codex: 2026-07-03.

---

## Open Issues

None.

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
- ISSUE-11: Removed duplicate `maddog.png` from project root. `public/maddog.png` retained as the served asset.

---

## Current Validation

- `npm run check`: passing, 0 errors, 0 warnings, 0 hints.
- `npm run build`: passing, 18 pages built.

Known pending assets:

- `public/images/hero-bg.png` — pending.
- `public/images/about-bg.png` — pending.
- `public/images/og-default.png` — pending.

---

Review by Claude | Updated 2026-07-03
