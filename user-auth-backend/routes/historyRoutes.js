const express = require('express');
const { paymentHistory } = require('../controllers/historyController');
const router = express.Router();

router.get('/', paymentHistory);

module.exports = router;