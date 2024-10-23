import html2pdf from "html2pdf.js";
import React, { useRef, useState } from "react";

function OrderSummary({ selectedCart }) {
  const cartItems = selectedCart[0];
  const [isAgreed, setIsAgreed] = useState(false); // Track checkbox state

  const invoiceRef = useRef(); // Reference to the invoice content

  const subTotal = cartItems
    .reduce((sum, item) => sum + Number(item.discountedPrice) * Number(item.quantity), 0)
    .toFixed(2);

  const shippingOptions = [
    { name: "Flat rate", price: 15.0 },
    { name: "Local pickup", price: 0 },
  ];

  const isCartEmpty = cartItems.length === 0; // Check if cart is empty

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const isButtonDisabled = isCartEmpty || !isAgreed; // Button disabled condition

  const generatePDF = () => {
    const element = invoiceRef.current; // Get the invoice content
    const options = {
      filename: `invoice_${new Date().toISOString()}.pdf`,
      jsPDF: { unit: "pt", format: "a4" },
    };

    // Generate PDF and open in new tab
    html2pdf()
      .from(element)
      .set(options)
      .output("bloburl")
      .then((pdfUrl) => {
        window.open(pdfUrl); // Open the generated PDF in a new tab
      });
  };

  return (
    <aside className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
      <div ref={invoiceRef} className="flex flex-col px-5 py-6 mx-auto w-full rounded-md border border-solid bg-black bg-opacity-0 max-md:px-5 max-md:mt-8">
        <h2 className="self-start text-base font-semibold tracking-tight leading-tight text-gray-950">
          Your order
        </h2>

        {isCartEmpty ? (
          <p className="text-red-600 mt-4">Your cart is empty.</p>
        ) : (
          <>
            <div className="flex gap-5 justify-between py-4 mt-3 text-xs font-medium tracking-tight text-gray-400 whitespace-nowrap border-b">
              <span>Product</span>
              <span className="text-right">Subtotal</span>
            </div>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 justify-between py-3.5 tracking-tight border-b text-gray-950"
              >
                <div className="text-xs leading-5">
                  {item.name} <span className="font-bold">× {item.quantity}</span>
                </div>
                <div className="my-auto text-sm text-right">
                  ${Number(item.discountedPrice).toFixed(2)}
                </div>
              </div>
            ))}
          </>
        )}

        <div className="flex gap-5 justify-between py-4 tracking-tight whitespace-nowrap border-b">
          <span className="text-xs font-medium text-gray-400">Subtotal</span>
          <span className="text-sm text-right text-gray-950">${subTotal}</span>
        </div>

        <div className="flex gap-5 justify-between py-3.5 border-b">
          <span className="my-auto text-xs font-medium tracking-tight text-gray-400">
            Shipping:
          </span>
          <div className="flex flex-col">
            {shippingOptions.map((option, index) => (
              <div key={index} className="flex gap-2">
                <span className="grow text-sm tracking-tight text-right text-gray-950">
                  {option.name}: ${option.price.toFixed(2)}
                </span>
                <div
                  className={`flex flex-col justify-center items-center px-0.5 bg-white border ${index === 0 ? "border-blue-600" : "border-neutral-500"
                    } border-solid h-[13px] rounded-[50px] w-[13px]`}
                >
                  {index === 0 && (
                    <div className="flex shrink-0 w-2 h-2 bg-blue-600 rounded-[50px]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-5 justify-between py-4 tracking-tight whitespace-nowrap border-b">
          <span className="text-xs font-medium text-gray-400">Total</span>
          <span className="text-sm font-bold text-right text-gray-950">
            $
            {(
              cartItems.reduce(
                (sum, item) => sum + Number(item.discountedPrice) * Number(item.quantity),
                0
              ) + shippingOptions[0].price
            ).toFixed(2)}
          </span>
        </div>

        <div className="mt-5">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col justify-center p-1 rounded-lg border border-gray-900 border-solid">
              <div className="flex shrink-0 w-2.5 h-2.5 bg-gray-900 rounded-md" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-gray-950">
              Direct bank transfer
            </span>
          </div>
          <p className="mt-4 text-sm tracking-tight leading-5 text-gray-600">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>

        <div className="flex gap-2 items-center mt-6">
          <input
            type="radio"
            id="checkPayments"
            name="paymentMethod"
            className="flex shrink-0 w-4 h-4 rounded-lg border border-gray-300 border-solid"
          />
          <label
            htmlFor="checkPayments"
            className="text-sm font-semibold tracking-tight text-gray-950"
          >
            Check payments
          </label>
        </div>

        <div className="flex gap-2 items-center mt-4">
          <input
            type="radio"
            id="cashOnDelivery"
            name="paymentMethod"
            className="flex shrink-0 w-4 h-4 rounded-lg border border-gray-300 border-solid"
          />
          <label
            htmlFor="cashOnDelivery"
            className="text-sm font-semibold tracking-tight text-gray-950"
          >
            Cash on delivery
          </label>
        </div>

        <div className="flex gap-2 items-center mt-6">
          <input
            type="checkbox"
            id="termsAgreement"
            className="flex shrink-0 w-4 h-4 bg-white rounded border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]"
            onChange={handleAgreementChange}
            required
          />
          <label
            htmlFor="termsAgreement"
            className="text-xs tracking-tight leading-none text-gray-950"
          >
            I have read and agree to the website{" "}
            <a href="#" className="text-purple-800">
              terms and conditions
            </a>{" "}
            *
          </label>
        </div>

        <button
          onClick={generatePDF}
          type="submit"
          className={`px-16 py-5 mt-3.5 text-sm font-bold tracking-tight leading-3 text-center text-white rounded-lg max-md:px-5 ${isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-purple-800"
            }`}
          disabled={isButtonDisabled}
        >
          Place Order
        </button>
      </div>
    </aside>
  );
}

export default OrderSummary;
