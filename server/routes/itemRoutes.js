const express = require("express");
const path = require("path");
const { addItem, getAllItems } = require("../controller/itemController");

const router = express.Router();

router.get("/", getAllItems);
router.post("/", addItem);
router.use("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

// app.get("/api/movies", async (req, res) => {
//   const moviesList = await movies.getAllMovies();
//   return res.json(moviesList);
// });
