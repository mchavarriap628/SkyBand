const express = require("express");
const router = express.Router();

const {
    createFlight,
    getFlight,
    getFlightById,
    updateFlight,
    deleteFlight
} = require("../controllers/flightController");


router.post("/", createFlight);

router.get("/", getFlight);

router.get("/:id", getFlightById);

router.put("/:id", updateFlight);

router.delete("/:id", deleteFlight);


module.exports = router;