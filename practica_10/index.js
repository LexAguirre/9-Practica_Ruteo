const express = require("express"); // importamos la dependencia
const app = express(); //declaramos una app de express

var port = process.env.PORT || 3000; //Setteamosel puerto para que escuche el servidor

//Primera ruta (esta a nivel de raiz /), Hello World!
app.get("/", function (req, res) {
  res.send("<html><head></head><body><h1>Hello World!</h1></body></html>"); //Esto se mostrara en el servidor
});

//Segunda ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
  res.json({ firstName: "Jhon", lastName: "Doe" }); //Esto se mostrara en el servidor
});

//Tercera ruta, recibe un parametro
app.get("/person/:id", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Person: " +
      req.params.id +
      "</h1></body></html>"
  ); //req.params.id tomara lo ingresasdo y lo coloca en el texto que se muestra en el servidor
});

app.listen(port); //Levanta el servidor y lo pone a escuchar
