// const Product = require('../models/Product');

const paymentHistory = async (req, res) => {
    const payments = await stripe.paymentIntents.list({ limit: 10 });
  res.json(
    payments.data.map((payment) => ({
      date: new Date(payment.created * 1000).toLocaleDateString(),
      amount: payment.amount,
      status: payment.status,
    }))
  );
}

module.exports = { paymentHistory };