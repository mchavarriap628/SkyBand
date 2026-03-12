const express = require("express");
const router = express.Router();

const {
  createInstrument,
  getInstruments,
  getInstrumentById,
  updateInstrument,
  deleteInstrument
} = require("../controllers/instrumentController");


router.post("/", createInstrument);

router.get("/", getInstruments);

router.get("/:id", getInstrumentById);

router.put("/:id", updateInstrument);

router.delete("/:id", deleteInstrument);


module.exports = router;