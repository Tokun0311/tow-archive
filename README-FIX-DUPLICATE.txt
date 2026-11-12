Tow Archive duplicate fix (2026-01-21 vs 2026-01-24)

The earlier update ZIP already contained the corrected 2026-01-24-05.md,
but copying its src folder into an existing project does not remove
old files. This caused both dates to show on the site.

Windows instructions:
1. Extract this ZIP.
2. Copy its contents into the EXISTING tow-archive project folder,
   merging/replacing existing files.
3. In the project root, double-click FIX-DUPLICATE-ENTRY.bat.
4. In GitHub Desktop, confirm 2026-01-21-05.md shows as DELETED,
   and 2026-01-24-05.md exists.
5. Commit to main, then Push origin. Wait until Cloudflare Pages reports
   a successful deployment, then refresh the website.

Corrected entry: /exhibitions/2026-01-24-05/
Old entry:       /exhibitions/2026-01-21-05/ (should be removed)
