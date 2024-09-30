import React from "react";

function PaymentMethods() {
  const paymentIcons = [
    {
      src: "/icons/visa.svg",
      alt: "Visa",
      className: "w-9 aspect-[2.77]",
    },
    {
      src: "/icons/master.svg",
      alt: "Mastercard",
      className: "w-6 aspect-[1.6]",
    },
    {
      src: "/icons/skrill.svg",
      alt: "American Express",
      className: "aspect-[3.53] w-[53px]",
    },
    {
      src: "/icons/paypal.svg",
      alt: "PayPal",
      className: "aspect-[2.73] w-[41px]",
    },
    {
      src: "/icons/klarna.svg",
      alt: "Apple Pay",
      className: "w-16 aspect-[4.27]",
    },
  ];

  return (
    <div className="flex gap-2.5 self-start mt-6">
      {paymentIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className={`object-contain shrink-0 ${icon.className}`}
        />
      ))}
    </div>
  );
}

export default PaymentMethods;
