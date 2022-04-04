const router = require("express").Router();
const {
  addItem,
  getAllItems,
  getItem,
} = require("../controller/itemController");

router.get("/", getAllItems);
router.get("/:id", getItem);
router.post("/", addItem);

module.exports = router;
