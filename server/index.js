const express = require("express");

const path = require("path")
const cors = require("cors");

const app = express();


const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"../client/build")));

app.get("/api", (req, res) => {
  return res.json({ message: "You have reached the Lender API" });
});

app.use((req, res) => res.sendFile(path.join(__dirname,"../client/build/index.html")));

if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;
