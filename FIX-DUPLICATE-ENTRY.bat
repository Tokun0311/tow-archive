@echo off
setlocal
cd /d "%~dp0"
if not exist "src\data\exhibitions" (
  echo ERROR: Place this BAT in your existing tow-archive project root.
  pause
  exit /b 1
)
if exist "src\data\exhibitions\2026-01-21-05.md" (
  del "src\data\exhibitions\2026-01-21-05.md"
  echo DELETED old duplicate exhibition.
) else (echo OK: duplicate entry absent.)
if exist "src\data\institutions\tokyo-bunka-kaikan.md" (
  del "src\data\institutions\tokyo-bunka-kaikan.md"
  echo DELETED incorrect old institution.
) else (echo OK: incorrect institution absent.)
if exist "src\data\exhibitions\2026-05-29-31.md" (
  findstr /C:"international-house-of-japan" "src\data\exhibitions\2026-05-29-31.md" >nul
  if errorlevel 1 (echo ERROR: May 29 metadata is not yet updated. Copy the new src folder first.) else (echo OK: May 29 exhibition metadata corrected.)
)
echo.
echo IMPORTANT: GitHub Desktop must show deleted 2026-01-21-05.md.
echo Then Commit and Push to deploy.
pause
