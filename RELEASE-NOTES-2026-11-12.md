# Tow Archive 2.0 — Editorial correction (01–29)

The 29 publicly edited exhibition records have now been rewritten as full published archive entries with four separate sections: Exhibition / Programme Overview, Personal Observation, Curatorial / Institutional Observation, and Research Question. This replaces the previous overly compressed body text. It preserves the reader’s original memories but does not paste raw chat answers into the site. Unknown memories remain explicitly unfilled.

Also includes:
- Writing navigation and `/writing/` index for future essays/reviews/research notes.
- Demonstration essay marked draft rather than published.
- Repeated entry-footer Editorial note removed: one global note remains on each exhibition detail page.
- Obsolete January 21 CURATION⇄FAIR file excluded; the corrected January 24 entry remains.

**Important:** Copy the contents of the extracted `tow-archive/` folder into the existing Astro project. Because copying does not delete stale files, manually delete `src/data/exhibitions/2026-01-21-05.md` if it exists, or run the included FIX-DUPLICATE-ENTRY.bat. Then run `npm run build`, commit and push to GitHub Desktop. The Cloudflare Pages deployment should then update automatically if connected.

Build verification could not be performed in this environment because the Astro dependency is not cached and npm registry access is disabled.
