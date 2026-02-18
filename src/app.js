//Este archivo es la configuración del servidor express, pero no lo enciende.

//Aquí estamos llamando los modulos o dependencias que ocupamos para crear la aplición o servidor.
const express = require("express");
const cors = require("cors");

const app = express();

// Cors se implementa para que el servidor de express acepte peticiones de dominios que no sean el mismo servidor.
app.use(cors());
//Eso es para que el servidor entienda datos en formato json, tiene que ser así porque estamos usando mongodb.
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    test: "No estoy en la playa, esto es una bañera."
  });
});

//Exportamos la aplicación para poder usarla desde otros archivos.
module.exports = app;