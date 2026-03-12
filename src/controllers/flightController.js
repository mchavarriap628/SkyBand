const Flight = require("../models/Flight");

// Crear Vuelo
const createFlight = async (req,res) => {
    try {
        const flight = new Flight(req.body);
        const savedFlight = await flight.save();
        
        res.status(201).json(savedFlight);

    } catch (error) {
        res.status(500).json({ message: "Error creando vuelo" });
    }
};

// Obtener información de todos los vuelos
const getFlight = async (req,res) => {
    try {
        const flight = await Flight.find();

        res.json(flight);

    } catch (error) {
        res.status(500).json({ message: "Error obteniendo datos de vuelos" });
    }
};

// Obtener información de un vuelo ID
const getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);

        if (!flight) {
            return res.status(404).json({ message: "Vuelo no encontrado" });
        }

        res.json(flight);

    } catch (error) {
        res.status(500).json({ message: "Error obteniendo información del vuelo" });
    }
};

// Actualizar un vuelo
const updateFlight = async (req, res) => {
    try {

        const flight = await Flight.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(flight);

    } catch (error) {
        res.status(500).json({ message: "Error actualizando datos del vuelo" });
    }
};

// Eliminar un vuelo por ID
const deleteFlight = async (req, res) => {
    try {

        await Flight.findByIdAndDelete(req.params.id);
        res.json({ message: "Vuelo eliminado" });

    } catch (error) {
        res.status(500).json({ message: "Error eliminando vuelo" });
    }
};

module.exports={
    createFlight,
    getFlight,
    getFlightById,
    updateFlight,
    deleteFlight
};