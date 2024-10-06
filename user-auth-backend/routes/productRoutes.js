const express = require('express');
const {allProducts} = require('../controllers/productController');
const router = express.Router();

router.get('/', allProducts);

module.exports = router;