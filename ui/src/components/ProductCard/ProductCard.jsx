import React from "react";
import StarRating from "./StarRating";

function ProductCard() {
  return (
    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">


      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="p-8 rounded-t-lg" src="/product-1.jpg" alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <StarRating />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
          </div>
        </div>
      </div>

    </div>

  );
}

export default ProductCard;
