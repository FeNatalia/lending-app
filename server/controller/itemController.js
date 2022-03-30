const Item = require('../model/item');

const getByCityName = (req, res, next) => {
  Item.find({ city: req.query.city })
    .then(result => {
      if (result.length === 0) {
        throw new Error('No items found in selected city');
      }
      return res.json(result);
    })
    .catch(err => notFound(err, next));
};

const addItem = (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => res.json({ error: err.message }));
};

const getAllItems = (req, res, next) => {
  if (req.query.city) {
    return getByCityName(req, res, next);
  }
  return Item.find()
    .then(result => res.json(result))
    .catch(err => next(err));
};

module.exports = {
  addItem,
  getAllItems,
};
