const GuestModel = require("../models/Guest.model");

const getAllGuests = () => {
  return GuestModel.find();
};
const getOneGuestById = id => {
  return GuestModel.findById(id);
};

module.exports = { getAllGuests, getOneGuestById };
