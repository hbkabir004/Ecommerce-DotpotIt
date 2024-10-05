const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

app.use('/user', userRoutes);
app.use('/products', productRoutes)

// Default route to handle favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204).send());

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
