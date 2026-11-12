@echo off
setlocal
cd /d "%~dp0"
set "OLD=src\data\exhibitions\2026-01-21-05.md"
set "NEW=src\data\exhibitions\2026-01-24-05.md"
if not exist "%NEW%" (
  echo ERROR: Corrected record not found: %NEW%
  echo Copy the updated src folder here first.
  pause
  exit /b 1
)
if exist "%OLD%" (
  del "%OLD%"
  if exist "%OLD%" (
    echo ERROR: Could not delete %OLD%
    pause
    exit /b 1
  )
  echo SUCCESS: Removed outdated duplicate %OLD%
) else (
  echo OK: Outdated duplicate is already absent.
)
echo Corrected record present: %NEW%
echo.
echo Next: GitHub Desktop - Commit to main - Push origin.
pause
