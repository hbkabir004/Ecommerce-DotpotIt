const express = require('express');
const { paymentGateway } = require('../controllers/paymentController');
const router = express.Router();

router.get('/', paymentGateway);

module.exports = router;