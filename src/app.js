//Este archivo es la configuración del servidor express, pero no lo enciende.
const express = require("express");
const cors = require("cors");
const app = express();

// Cors se implementa para que el servidor de express acepte peticiones de dominios que no sean el mismo servidor.
app.use(cors());

//Eso es para que el servidor entienda datos en formato json, tiene que ser así porque estamos usando mongodb.
app.use(express.json());

//Rutas del CRUD
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const instrumentRoutes = require("./routes/instrumentRoutes");
app.use("/api/instruments", instrumentRoutes);

const flightRoutes = require("./routes/flightRoutes");
app.use("/api/flights",flightRoutes);

const reservationRoutes = require("./routes/reservationRoutes");
app.use("/api/reservations", reservationRoutes);

// Ruta de prueba o index
app.get("/", (req, res) => {
  res.json({
    test: "No estoy en la playa, esto es una bañera."
  });
});

//Exportamos la aplicación para poder usarla desde otros archivos.
module.exports = app;



