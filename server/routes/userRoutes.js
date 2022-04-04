const router = require('express').Router();
const { addUser, getUser } = require('../controller/userController');

router.get('/:id', getUser);
router.post('/', addUser);

module.exports = router;
