const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const port = 8080;
app.use(express.json());

app.get("/api", (req, res) => {
  return res.json({ message: "You have reached the Lender API" });
});

if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;