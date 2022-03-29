const Item = require("../model/item");

const addItem = (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.json({ error: err.message }));
};

module.exports = {
  addItem,
};
