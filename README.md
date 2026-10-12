# Lichuan Tow Deng — Archive v0.3

Minimal Astro archive, white background, graphite-olive typography. The home page is a chronological list of writing and photography. Only **About** appears in the navigation. The language buttons (All / 中文 / 日本語 / English) and date sort (newest / oldest) are on the home page.

## Installation / deployment
- Keep the `src/` and `public/` folders intact.
- `npm install` then `npm run dev` for local preview.
- Cloudflare Pages: build command `npm run build`, output `dist`.
- Copy the contents of this ZIP into the existing GitHub Desktop repository (do not touch `.git`), then commit and push.
- Remove the old `src/pages/writing/index.astro`, `src/pages/photography/index.astro`, `src/pages/archive/index.astro` files in your GitHub repository if they remain. This zip does not include them.

## Content
- Articles: `src/data/writing/*.md`, with `language: EN`, `ZH`, or `JA` in frontmatter.
- Photography: `src/data/photography/*.md`, also optionally `language: EN`, `ZH`, or `JA`; defaults to `EN`.
- In-progress content: `draft: true`.
- Detail pages remain available for individual writings and photo series, but section index pages have been removed.
- Sample contents remain demonstrations, not authored work; edit or mark as draft before sharing publicly.
