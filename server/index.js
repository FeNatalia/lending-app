const express = require("express");

const path = require("path")
const cors = require("cors");
const items = require("./items");

const app = express();


const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"../client/build")));

app.get("/api", (req, res) => {
  return res.json({ message: "You have reached the Lender API" });
});

app.post("/api/items", async (req, res, next) => {
  const createdItem = await items.addItem(req.body);

  return res
    .status(201)
    .location(`/api/items/${createdItem._id}`)
    .json(createdItem);
});

app.use((req, res) => res.sendFile(path.join(__dirname,"../client/build/index.html")));

if (!module.parent) {
  app.listen(port);
}

module.exports.app = app;
