@echo off
title William Eagan Website

echo Starting local website...
echo.

cd /d "%~dp0"

start "" http://localhost:8000

python -m http.server 8000

echo.
echo Website server stopped.
pause