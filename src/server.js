// este archivo es lo que enciende el servidor express.
//aquí estamos llamando a "app", que es la aplicación que exportamos en app.js
const app = require("./app");

//aquí estamos llamando la conexión a la base de datos en mongo.
const connectDB = require("./config/db");

//incluimos variables de entorno.
require("dotenv").config();

//Por alguna razón node no resolvía el connection string, con estos DNS sí funcionó.
//Iniciamos la conexión con la base de datos
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
connectDB();

//Esta constante sirve para definir el puerto del server local, si tengo uno en mis variables de entorno lo uso, si no será 3000
const PORT = process.env.PORT || 3000;

//aquí se ejecuta y comienza a correr el server.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});