const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
    trim: true
  },

  destination: {
    type: String,
    required: true,
    trim: true
  },

  date: {
    type: Date,
    required: true
  },

  availableSeats: {
    type: Number,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Flight", flightSchema);