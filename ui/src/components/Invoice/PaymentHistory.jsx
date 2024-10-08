import React, { useEffect, useState } from "react";

const PaymentHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Fetch payment history from your backend
        fetch("/payment-history")
            .then((response) => response.json())
            .then((data) => setHistory(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-5">
            <h2 className="text-lg font-bold">Payment History</h2>
            <ul className="mt-3">
                {history.map((payment, index) => (
                    <li key={index} className="border-b py-2">
                        <span>{payment.date} - </span>
                        <span>${payment.amount / 100}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentHistory;
