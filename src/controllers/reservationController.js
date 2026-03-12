const Reservation = require("../models/Reservation");


// Crear reserva
const createReservation = async (req, res) => {
  try {

    const reservation = new Reservation(req.body);
    const savedReservation = await reservation.save();

    res.status(201).json(savedReservation);

  } catch (error) {
    res.status(500).json({ message: "Error creando reserva" });
  }
};


// Obtener todas las reservas
/*En esta parte se usa populate para referenciar a las otras colecciones
por eso en el controlador esto lo definimos como ref.
Los parametros son los ID de cada objeto, y las propiedades como nombre, email, origen etc.
*/
const getReservations = async (req, res) => {
  try {

    const reservations = await Reservation.find()
      .populate("userId", "name email")
      .populate("flightId", "origin destination date")
      .populate("instruments", "name type");

    res.json(reservations);

  } catch (error) {
    res.status(500).json({ message: "Error obteniendo reservas" });
  }
};


// Obtener reserva por ID
const getReservationById = async (req, res) => {
  try {

    const reservation = await Reservation.findById(req.params.id)
      .populate("userId", "name email")
      .populate("flightId", "origin destination date")
      .populate("instruments", "name type");

    if (!reservation) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }

    res.json(reservation);

  } catch (error) {
    res.status(500).json({ message: "Error obteniendo reserva" });
  }
};


// Actualizar reserva
const updateReservation = async (req, res) => {
  try {

    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(reservation);

  } catch (error) {
    res.status(500).json({ message: "Error actualizando reserva" });
  }
};


// Eliminar reserva
const deleteReservation = async (req, res) => {
  try {

    await Reservation.findByIdAndDelete(req.params.id);

    res.json({ message: "Reserva eliminada" });

  } catch (error) {
    res.status(500).json({ message: "Error eliminando reserva" });
  }
};


module.exports = {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation
};