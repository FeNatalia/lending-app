const Item = require("../model/item");

const addItem = (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.json({ error: err.message }));
};

const getAllItems = (req, res, next) => {
  return Item.find()
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

module.exports = {
  addItem,
  getAllItems,
};
