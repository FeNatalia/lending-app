const Item = require('../model/item');
const { notFound } = require('./errorHandler');

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
  if (req.query.category) {
    query.category = req.query.category;
  }
  Item.find(query)
    .sort({ createdAt: -1 })
    .then(result => {
      return res.json(result);
    });
};

const getItem = (req, res, next) => {
  Item.findById(req.params.id)
    .then(result => {
      if (result === null) {
        throw new Error('No items found with the provided id');
      }
      res.json(result);
    })
    .catch(err => notFound(err, next));
};

module.exports = {
  addItem,
  getAllItems,
  getItem,
};
