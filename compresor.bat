@echo off
set /p curso="Introduce el nombre del curso: "
set /p modulo="Introduce el nombre del modulo: "
set /p indice="Introduce el numero del indice: "

REN %~d0%~p0%curso%\index%indice%.html index.html
COPY %~d0%~p0%curso%\imsmanifest.xml %~d0%~p0
"C:\Program Files\7-Zip\7z.exe" a -i!%curso%\json\%modulo%.json -i!%curso%\css -i!%curso%\img\comunes -i!%curso%\img\%modulo% -i!%curso%\index.html -i!%curso%\js -i!base.css -i!mnt.js -i!imsmanifest.xml %curso%_%modulo%.zip
REN %~d0%~p0%curso%\index.html index%indice%.html
DEL %~d0%~p0\imsmanifest.xml
pause