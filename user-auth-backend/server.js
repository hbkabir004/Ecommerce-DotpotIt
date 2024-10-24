require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const singleProductRoute = require('./routes/singleProductRoute');
const paymentRoutes = require('./routes/paymentRoutes');
const historyRoutes = require('./routes/historyRoutes');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();

// const Stripe = require('stripe');
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


app.get('/', (req, res) => {
  res.send('Stripe integration working!');
});
// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

connectDB();

app.use('/api', userRoutes);
app.use('/products', productRoutes);
app.use('/products', singleProductRoute);
// app.use('/create-payment-intent', paymentRoutes)
// app.use('/payment-history', historyRoutes)


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Default route to handle favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204).send());

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
