const Product = require('../models/Product');
// require('dotenv').config();

const allProducts = async (req, res) => {
  console.log('GET /products endpoint hit');
  try {
    const products = await Product.find(); // Fetch all products from the collection
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
}

module.exports = { allProducts };