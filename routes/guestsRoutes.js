const express = require("express");
const router = express.Router();

const {
  allGuests,
  oneGuest,
  addNewGuest
} = require("../controllers/guest_controller");

router.post("/RSVP", addNewGuest);

module.exports = router;
