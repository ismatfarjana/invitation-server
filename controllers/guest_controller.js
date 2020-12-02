const { getAllGuests, getOneGuestById } = require("../utils/guest_utils");

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

module.exports = { allGuests, oneGuest };
