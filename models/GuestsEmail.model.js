const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestsEmail = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("GuestsEmail", GuestsEmail);
