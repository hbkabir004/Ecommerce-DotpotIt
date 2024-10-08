import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import { CartContext } from "../../App";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";
import StripeCheckoutForm from "./StripeCheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function InvoicePage() {
  const selectedCart = useContext(CartContext);
  selectedCart.pop();
  console.log(selectedCart);

  return (
    <section className="px-72 mb-14">
      <div className="flex flex-col">
        <nav className="flex gap-1.5 self-start text-xs tracking-tight whitespace-nowrap">
          <span className="grow text-gray-400">Home</span>
          <img
            loading="lazy"
            src="/icons/checkout-icons/right-arrow.svg"
            className="object-contain shrink-0 aspect-[0.92] w-[11px]"
            alt=""
          />
          <span className="text-gray-950">Checkout</span>
        </nav>

        {/* <CouponBanner /> */}
        <div className="flex flex-wrap gap-1.5 px-5 py-5 mt-6 text-sm tracking-tight leading-normal bg-neutral-100 text-zinc-800 max-md:max-w-full">
          <img
            loading="lazy"
            src="/icons/coupon.svg"
            className="object-contain shrink-0 my-auto aspect-square w-[15px]"
            alt=""
          />
          <div className="grow px-4 py-5 border border-solid w-fit max-md:pr-5 max-md:max-w-full">
            Have a coupon?{" "}
            <span className="text-gray-950">Click here to enter your code</span>
          </div>
        </div>

        <section className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full max-md:mt-8 max-md:max-w-full">
                <div className="flex flex-col self-stretch px-6 py-5 w-full bg-red-50 rounded-md border border-red-300 border-solid max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-1 items-center self-start tracking-tight">
                    <img
                      loading="lazy"
                      src="/icons/checkout-icons/box.svg"
                      className="object-contain shrink-0 self-stretch aspect-square w-[17px]"
                      alt=""
                    />
                    <span className="self-stretch my-auto text-sm font-semibold text-gray-950">
                      Add{" "}
                    </span>
                    <div className="flex gap-px self-stretch my-auto">
                      <span className="text-sm font-bold text-red-600">
                        $299.11
                      </span>
                      <span className="text-sm font-semibold basis-auto text-gray-950">
                        {" "}
                        to cart and get free shipping!
                      </span>
                    </div>
                  </div>
                  {/* <ProgressBar /> */}
                  <div className="flex overflow-hidden flex-col mt-4 bg-red-100 max-md:max-w-full">
                    <div className="flex shrink-0 rounded-xl bg-black bg-opacity-10 h-[5px] max-md:max-w-full" />
                  </div>
                </div>

                <BillingDetails />
              </div>
            </div>

            <OrderSummary selectedCart={selectedCart} />
          </div>
        </section>
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm cartProducts={selectedCart} description="Invoice Payment" />
        </Elements>
      </div>
    </section>
  );
}

export default InvoicePage;
