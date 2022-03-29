const express = require("express");
const path = require("path");
const cors = require("cors");
require("./config/db.js");

const itemRoutes = require("./routes/itemRoutes");
const {
  errorHandler,
  globalErrorHandler,
} = require("./controller/errorHandler");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  return res.json({ message: "You have reached the Lender API" });
});
app.use("/api/items", itemRoutes);

app.use(errorHandler);
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.app = app;
