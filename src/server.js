// este archivo es lo que enciende el servidor express.

//aquí estamos llamando a "app", que es la aplicación que exportamos en app.js
const app = require("./app");
//esto sirve para que este archivo server.js pueda encontrar y ysar nuestra variable de entorno.
require("dotenv").config();

//esta constante sirve para definir el puerto, si tengo uno en mis variables de entorno lo uso, si no será 3000
const PORT = process.env.PORT || 3000;

//aquí se ejecuta y comienza a correr el server.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});