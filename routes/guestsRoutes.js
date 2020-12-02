const express = require("express");
const router = express.Router();

const {
  allGuests,
  oneGuest,
  addNewGuest
} = require("../controllers/guest_controller");

router.get("/", allGuests);
router.post("/", addNewGuest);
router.get("/:id", oneGuest);

module.exports = router;
