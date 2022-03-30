const express = require('express');
const { addItem, getAllItems } = require('../controller/itemController');

const router = express.Router();

router.get('/', getAllItems);
router.post('/', addItem);

module.exports = router;
