const {
  getAllGuests,
  getOneGuestById,
  addGuest
} = require("../utils/guest_utils");

const addNewGuest = (req, res) => {
  addGuest(req)
    .then(guest => {
      console.log("saved guest", guest);
      res.json(guest);
    })
    .catch(err => res.status(400).json("Error while adding new guest:" + err));
};

const allGuests = (req, res) => {
  getAllGuests(req)
    .then(guests => res.json(guests))
    .catch(err =>
      res.status(400).json("Error while getting the list of guests:" + err)
    );
};

const oneGuest = (req, res) => {
  getOneGuestById(req.params.id)
    .then(guest => res.json(guest))
    .catch(err => res.status(500).json("Error while getting one guest:" + err));
};

module.exports = { addNewGuest, allGuests, oneGuest };
