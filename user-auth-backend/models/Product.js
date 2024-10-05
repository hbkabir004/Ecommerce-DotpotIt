const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: String, // Or use `Number` if prices should be numerical
    required: true,
  },
  discountedPrice: {
    type: String, // Or use `Number` if prices should be numerical
    required: true,
  }
}, { collection: 'products' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
