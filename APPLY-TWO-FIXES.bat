@echo off
cd /d "%~dp0"
if exist "src\data\exhibitions\2026-01-21-05.md" del "src\data\exhibitions\2026-01-21-05.md"
if exist "src\data\institutions\tokyo-bunka-kaikan.md" del "src\data\institutions\tokyo-bunka-kaikan.md"
echo Checked obsolete files in this project. Verify deletions in GitHub Desktop.
pause
