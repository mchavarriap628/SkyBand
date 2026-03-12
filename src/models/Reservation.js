const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
    required: true
  },

  instruments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instrument"
    }
  ],

  type: {
    type: String,
    enum: ["individual", "group"],
    default: "individual"
  },

  status: {
    type: String,
    enum: ["active", "cancelled"],
    default: "active"
  }

}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);