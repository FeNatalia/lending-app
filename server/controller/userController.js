const User = require('../model/user');
const { notFound } = require('../controller/errorHandler');

const addUser = (req, res) => {
    const user = new User(req.body);
    user._id = req.body.uid;
    user
        .save()
        .then(result => res.status(201).json(result))
        .catch(err => res.json({ error: err.message }));
};

const getUser = (req, res, next) => {
    User.findById(req.params.id)
        .then(result => {
            if (result === null) {
                throw new Error('No user found with the provided id');
            }
            res.json(result);
        })
        .catch(err => notFound(err, next));
};

module.exports = {
    addUser,
    getUser,
};
