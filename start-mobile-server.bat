@echo off
title MOSSA Mobile Preview
cd /d "%~dp0"

echo Starting MOSSA Mobile Preview...
echo.

"C:\Program Files\nodejs\node.exe" "%~dp0tools\lan-server.js"

echo.
echo The server has stopped.
pause
