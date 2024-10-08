import React from "react";
import { Toaster } from "react-hot-toast";
import StarRating from "./StarRating";

const ProductCard = ({ productItem, handleAddToCart }) => {

  const { image, discount, icon, name, rating, originalPrice, discountedPrice } = productItem;
  // const notify = toast

  return (
    <div className="flex flex-col items-start px-4 pb-4 w-full border border-r max-md:mt-4 rounded-xl">
      <div className="flex overflow-hidden flex-col py-1 mb-2 w-full text-xs font-extrabold tracking-tight text-center text-red-50 uppercase">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-cover inset-0 size-full"
        />

        <div className="flex relative z-10 gap-8 self-start mt-0 max-md:mr-0">
          {discount && (
            <div className="p-2.5 my-auto bg-red-600 rounded-2xl">
              {discount}
            </div>
          )}
          {icon && (
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain shrink-0 w-8 rounded-2xl aspect-square"
            />
          )}
        </div>
      </div>

      <h2 className="text-lg font-semibold tracking-tight leading-5 text-gray-950">
        {name}
      </h2>
      <StarRating rating={rating} />

      <div className="flex gap-2 mt-5 tracking-tight leading-none whitespace-nowrap">
        <div className="grow text-2xl font-bold text-red-600">
          ${discountedPrice}
        </div>
        <div className="text-lg font-medium text-gray-900 line-through ml-2">
          ${originalPrice}
        </div>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={() => handleAddToCart(productItem)}
        className="flex overflow-hidden gap-5 justify-between self-stretch px-3.5 py-2.5 mt-3.5 text-sm font-semibold tracking-tight leading-3 text-purple-800 border border-purple-800 border-solid rounded-[999px] hover:bg-purple-600 hover:text-white">
        <span className="my-auto">Add to cart</span>
        <img
          loading="lazy"
          src="/icons/plus.svg"
          alt=""
          className="object-contain shrink-0 aspect-[1.38] w-[22px]"
        />
      </button>
      <Toaster />
    </div>
  );
};

export default ProductCard;
