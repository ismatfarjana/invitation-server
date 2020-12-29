const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cors());

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to DB 🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂");
  })
  .catch(err => {
    console.log("Cannot connect to The DB");
  });

app.use(express.json());

const guestsRoute = require("./routes/guestsRoutes");
app.use("/api/guests", guestsRoute);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Express API listening to port http://localhost:${port}`);
});
