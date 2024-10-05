import React from "react";

function CouponBanner() {
  return (
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
  );
}

export default CouponBanner;
