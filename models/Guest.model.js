const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Guest = new Schema({
  name: { type: String, required: true },
  adults: { type: Number, required: true },
  kids: { type: Number, required: true },
  kidsUnderOneYear: { type: Boolean, required: true },
  numOfkidsUnderOneYear: { type: Number, required: true }
});

module.exports = mongoose.model("Guest", Guest);
