const express = require("express");
const router = express.Router();

const {
  allGuests,
  oneGuest,
  addNewGuest
} = require("../controllers/guest_controller");

router.post("/RSVP", addNewGuest);
router.get("/list", allGuests);

module.exports = router;
