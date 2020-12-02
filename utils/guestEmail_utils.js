const GuestsEmail = require("../models/GuestsEmail.model");

const getAllGuestsEmail = () => {
  return GuestModel.find();
};
const getOneGuestEmailById = id => {
  return GuestModel.findById(id);
};

module.exports = { getAllGuestsEmail, getOneGuestEmailById };
