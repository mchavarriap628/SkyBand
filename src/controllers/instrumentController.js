const Instrument = require("../models/Instrument");


// Crear instrumento
const createInstrument = async (req, res) => {
  try {

    const instrument = new Instrument(req.body);
    const savedInstrument = await instrument.save();

    res.status(201).json(savedInstrument);

  } catch (error) {
    res.status(500).json({ message: "Error creando instrumento" });
  }
};


// Obtener todos
const getInstruments = async (req, res) => {
  try {

    const instruments = await Instrument.find();

    res.json(instruments);

  } catch (error) {
    res.status(500).json({ message: "Error obteniendo instrumentos" });
  }
};


// Obtener por ID
const getInstrumentById = async (req, res) => {
  try {

    const instrument = await Instrument.findById(req.params.id);

    if (!instrument) {
      return res.status(404).json({ message: "Instrumento no encontrado" });
    }

    res.json(instrument);

  } catch (error) {
    res.status(500).json({ message: "Error obteniendo instrumento" });
  }
};


// Actualizar
const updateInstrument = async (req, res) => {
  try {

    const instrument = await Instrument.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(instrument);

  } catch (error) {
    res.status(500).json({ message: "Error actualizando instrumento" });
  }
};


// Eliminar
const deleteInstrument = async (req, res) => {
  try {

    await Instrument.findByIdAndDelete(req.params.id);

    res.json({ message: "Instrumento eliminado" });

  } catch (error) {
    res.status(500).json({ message: "Error eliminando instrumento" });
  }
};


module.exports = {
  createInstrument,
  getInstruments,
  getInstrumentById,
  updateInstrument,
  deleteInstrument
};