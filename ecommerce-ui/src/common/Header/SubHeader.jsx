/**
 * This code was generated by Builder.io.
 */
import React from "react";

const SubHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-3.5 w-full text-xs font-medium tracking-tight text-gray-500 bg-white border border-b max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1359px] max-md:max-w-full">
        <nav className="flex gap-4">
          <a href="#about" className="my-auto">
            About Us
          </a>
          <a href="#account">My account</a>
          <a href="#wishlist" className="my-auto">
            Wishlist
          </a>
          <p className="px-4 py-0.5 border border-l">
            We deliver to you every day from{" "}
            <span className="font-bold text-orange-600">7:00 to 23:00</span>
          </p>
        </nav>
        <div className="flex gap-2 my-auto">
          <span>English</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eb07d606a4424de2f5d042ee395d6c98b8a54fa472545c7dfec32bffc3c3c83?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
            className="object-contain shrink-0 self-start w-2 aspect-[0.8]"
            alt=""
          />
          <span>USD</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf76827f0bae36e4d7f55feb79f58ed01a0f0f85a7f45a789ab1fa66cc176c94?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
            className="object-contain shrink-0 self-start w-2 aspect-[0.8]"
            alt=""
          />
          <a href="#tracking">Order Tracking</a>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
