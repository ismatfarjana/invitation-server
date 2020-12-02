const GuestModel = require("../models/Guest.model");

const addGuest = req => {
  const name = req.body.name;
  const adults = req.body.adults;
  const kids = req.body.kids;
  const newGuest = new GuestModel({
    name,
    adults,
    kids
  });
  return newGuest.save();
};

const getAllGuests = () => {
  return GuestModel.find();
};
const getOneGuestById = id => {
  return GuestModel.findById(id);
};

module.exports = { getAllGuests, getOneGuestById, addGuest };
