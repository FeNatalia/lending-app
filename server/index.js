const express = require("express");
const cors = require("cors");

const app = express();

const port = 8080;
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  return res.json({ message: "You have reached the Lender API" });
});

if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;