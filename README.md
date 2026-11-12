ZiCang cursor update for Tow Archive

Files included:
- public/cursors/zicang-default.png
- public/cursors/zicang-pointer.png
- src/styles/cursor-snippet.css

How to apply:
1. Copy the folder public/cursors into your local tow-archive project at public/cursors.
2. Open src/styles/cursor-snippet.css and copy the whole contents.
3. Paste that CSS at the END of your existing src/styles/global.css.
4. Save.
5. In GitHub Desktop, commit and push.

What it does:
- Default cursor becomes ZiCang (front-facing).
- Hover / clickable cursor becomes ZiCang raising a paw.
- Keeps the green brand color and adds more spacing to TOW ARCHIVE.

Notes:
- Custom cursors may not display on touch devices such as iPhone/iPad.
- If the cursor feels too large or too small, change the PNG size or hotspot values.


## Public research archive (2026)

All uploaded 2026 visit records are publicly included. They are located in `src/data/exhibitions/`. Related people, institutions and concepts are in neighboring data directories. The list and detail pages are generated at build time.

`verification: recorded` means the entry was transcribed from the owner's diary, not that dates or exhibition titles are independently verified. `needs-review` marks incomplete or conflicting entries. `exhibitionEnd` is a provisional end date and must be fact-checked with primary sources.

To add one record, create a Markdown file with valid frontmatter in `src/data/exhibitions/` and run `npm run build`. The existing Writing / Photography routes and hamster cursor are preserved.

**Publishing note:** No private notebook or work documents are included in this archive. Do not put confidential materials under `src/` or `public/`.
