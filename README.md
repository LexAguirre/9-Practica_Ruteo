![Logo](img/ucol-logo.jpg)

# Práctica 9: Ruteo

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

- Nodemon server
- Express module

> ENTREGA: JUEVES 24 DE MARZO DEL 2022

## INFORMACIÓN ADICIONAL

El siguiente ejercicio tiene como objetivo mostrar la forma en la que podemos establecer más de una ruta para nuestra App de Express, y la forma en la que podemos recuperar información contenida en la colección “params” del objeto “request”

## EXPLICACIÓN DEL PROCESO

1. Crea una carpeta llamada "practica_10"

2. Inicializa NPM con npm init -y

3. Instala los paquete express con npm i express y nodemon con npm install -g nodemon

4. Crea un nuevo archivo index.js

5. Escribe el codigo donde se requiera express y donde una app lo mande a llamar

6. Ahora se realizara un route handler al iniciar el servidor y con un respond se imprimira el texto "Hello World, this is the root route"

7. El servidorse localizara en el puerto 3000

8. Ahora se realizara un route handler hacia la direción "uno" y con un respond se imprimira el texto "Hello World, frome route One"

9. Ahora en la linea instala 'npm install -g nodemon' y escribe "nodemon server"

10. Abre una nueva ventana en el navegador y escribe localhost:3000

11. Agrega un nuevo route handler propio y ademas otro que tenga la direccion "prueba" y que responda imprimiendo "Hello World, frome route Prueba"

12. Ahora la ruta prueba debera regresar un texto html

13. Se crea un archivo .gitignore conteniendo node_modules para evitar empujar la carpeta node_modules en github

## RECURSOS

- https://www.npmjs.com/
