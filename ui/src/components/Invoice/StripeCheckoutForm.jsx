// StripeCheckoutForm.jsx
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const StripeCheckoutForm = ({ cartProducts, description }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const cartItems = cartProducts[0];
    const paymentAmount = cartItems.reduce((sum, item) => sum + Number(item.discountedPrice) * Number(item.quantity), 0).toFixed(2);

    const totalPaymentAmount = Number(paymentAmount) + 15;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        const cardElement = elements.getElement(CardElement);

        try {
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                setError(error.message);
                setLoading(false);
                return;
            }

            // Call your backend to handle the payment intent creation
            const response = await fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 5000 }), // Example payload
            });


            const paymentIntent = await response.json();

            if (paymentIntent.status === 'succeeded') {
                // Payment succeeded, display success message or navigate to success page
                console.log('Payment successful');
            } else {
                setError('Payment failed');
            }
        } catch (error) {
            setError('Payment error: ' + error.message);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='mt-5 p-2 rounded-md w-[65%] border solid border-2' options={{ style: { base: { fontSize: '16px' } } }} />
            {error && <div className="text-red-500 mt-4">{error}</div>}
            <button
                type="submit"
                disabled={!stripe || loading}
                className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                {loading ? 'Processing...' : `Pay $${totalPaymentAmount.toFixed(2)}`}
            </button>
        </form>
    );
};

export default StripeCheckoutForm;
