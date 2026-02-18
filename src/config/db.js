//importamos la libreria que sirve para conectar node.js con mongodb
const mongoose = require("mongoose");

//se crea una conexión asincronica, para poder usar await.
const connectDB = async () => {
  try {
    //aquí intentamos conectarnos usando la cadena de conexión de mongo dentro de mis variables de entorno.
    await mongoose.connect(process.env.MONGO_URI);
    //si todo sale bien
    console.log("MongoDB conectado");
  } catch (error) {
    //algo no funcionó
    console.error("Error conectando a MongoDB", error);
    //estp detiene la aplicación inmediatamente
    process.exit(1);
  }
};

module.exports = connectDB;