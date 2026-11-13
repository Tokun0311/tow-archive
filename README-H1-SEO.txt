TOW ARCHIVE — Homepage SEO patch (2026-11-13)

Only three existing source files are included:
  src/layouts/Base.astro
  src/pages/index.astro
  src/styles/global.css

Changes:
  • On / only, TOW ARCHIVE logo is wrapped in an actual H1 heading. On other pages, the logo remains a plain link and each article keeps its own H1.
  • Home HTML title and meta description are made descriptive.
  • Heading margin and line height are reset to preserve the same header design.

No exhibition records, Writing articles, robots.txt, sitemap scripts, or verification files are included or changed.

Installation:
  1. Back up your current tow-archive project.
  2. Copy the 'src' folder from this patch into the actual GitHub Desktop repository root, merging/replacing these 3 files only.
  3. Review 3 changed files in GitHub Desktop.
  4. Optionally run `npm run build` locally, then commit and push.
  5. After Cloudflare deployment, run Bing Live URL Inspection again.

Important: The H1 fix is a technical SEO improvement; it does NOT guarantee that Bing will immediately change an existing 'Blocked' index status.
