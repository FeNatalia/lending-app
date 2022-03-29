const express = require("express");
const path = require("path");
const { addItem } = require("../controller/itemController");

const router = express.Router();

router.post("/", addItem);
router.use("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
