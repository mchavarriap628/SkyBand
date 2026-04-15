const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation
} = require("../controllers/reservationController");


router.post("/", protect, createReservation);

router.get("/", protect, getReservations);

router.get("/:id", protect, getReservationById);

router.put("/:id", protect, updateReservation);

router.delete("/:id", protect, deleteReservation);


module.exports = router;