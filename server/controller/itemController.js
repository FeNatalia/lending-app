const Item = require('../model/item');

const addItem = (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => res.json({ error: err.message }));
};

const getAllItems = (req, res) => {
  let query = {};
  if (req.query.q) {
    query = { ...query, name: { $regex: req.query.q, $options: 'i' } };
  }
  if (req.query.city) {
    query.city = req.query.city;
  }
  Item.find(query).then(result => {
    return res.json(result);
  });
};

module.exports = {
  addItem,
  getAllItems,
};
