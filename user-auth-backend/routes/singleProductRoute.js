const express = require('express');
const router = express.Router();
const { getProductById } = require('../controllers/singleProductController');

// Ensure getProductById is defined
router.get('/:id', getProductById);

module.exports = router;
