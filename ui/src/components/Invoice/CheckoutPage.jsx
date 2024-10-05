import React from "react";
import BillingDetails from "./BillingDetails";
import CouponBanner from "./CouponBanner";
import OrderSummary from "./OrderSummary";
import ProgressBar from "./ProgressBar";

function CheckoutPage() {
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

        <CouponBanner />

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
                  <ProgressBar />
                </div>

                <BillingDetails />
              </div>
            </div>

            <OrderSummary />
          </div>
        </section>
      </div>
    </section>
  );
}

export default CheckoutPage;
