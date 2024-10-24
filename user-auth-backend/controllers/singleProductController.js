const mongoose = require('mongoose'); // Import mongoose if not done already
const Product = require('../models/Product');

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        // Convert to ObjectId if it is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: 'Invalid product ID format' });
        }

        const product = await Product.findById(productId); // Use findById for MongoDB documents
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error); // Add logging for debugging
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};

module.exports = {getProductById}
