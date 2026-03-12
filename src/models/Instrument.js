const mongoose = require("mongoose");

const instrumentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  type: {
    type: String,
    required: true,
    trim: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Instrument", instrumentSchema);

/*
name: nombre del instrumento
type: tipo (guitarra, violin, bateria)
userId: referencia al músico dueño del instrumento
  ref: "User" permite relacionar colecciones en Mongo.
*/