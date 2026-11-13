@echo off
set "target=%~dp0src\data\exhibitions\2026-01-21-05.md"
if exist "%target%" (del "%target%" & echo Deleted wrong dated record.) else (echo Old record not present.)
pause
