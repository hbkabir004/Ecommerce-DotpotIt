const express = require('express');
const {allProducts} = require('../controllers/productController');
const router = express.Router();

router.get('/products', allProducts);

module.exports = router;