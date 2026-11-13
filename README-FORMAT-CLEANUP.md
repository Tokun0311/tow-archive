# Tow Archive format cleanup

- Exhibition records 01-31: retained article paragraphs; removed duplicated hero titles and metadata already displayed by site chrome.
- Records 01-03: removed assistant-facing headings and paste artifacts; preserved actual exhibition summaries and personal observations.
- Normalized markdown headings.
- The editorial note is produced only by the exhibition page template.
- 32-63: unchanged.
- Run APPLY-TWO-FIXES.bat *inside the actual GitHub Desktop project root* after copying to ensure legacy 2026-01-21-05.md is deleted; Windows folder merge does not delete old files.
- Check npm run build, then Commit and Push.
