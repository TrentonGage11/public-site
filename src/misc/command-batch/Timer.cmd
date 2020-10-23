@echo off
mode 32,10

title Timer

:start
title Enter time to countdown from.

cls
echo Enter time to countdown from.

set/p "time=>
set time=%time%

:loop
cls

set /a time=%time%-1
if %time%==0 goto timesup

title Counting down...

echo.
echo.

echo.
echo Countdown - [%time%]

ping localhost -n 2 > nul
goto loop

:timesup
echo Time is Up!!

pause
goto start