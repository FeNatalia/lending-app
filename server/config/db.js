const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");

const uri = process.env.MONGO_DB_URL;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err.message));
