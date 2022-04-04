const router = require('express').Router();
const { addItem, getAllItems } = require('../controller/itemController');

router.get('/', getAllItems);
router.post('/', addItem);

module.exports = router;
