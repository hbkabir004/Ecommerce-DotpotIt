import React from "react";
import StarRating from "./StarRating";

const ProductCard = ({ productItem, handleAddToCart }) => {

  const { image, discount, icon, name, rating, originalPrice, discountedPrice } = productItem;

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
        <div className="text-base font-medium text-gray-900">
          ${originalPrice}
        </div>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={() => handleAddToCart(productItem)}
        className="flex overflow-hidden gap-5 justify-between self-stretch px-3.5 py-2.5 mt-3.5 text-sm font-medium tracking-tight leading-3 text-purple-800 border border-purple-800 border-solid rounded-[999px]">
        <span className="my-auto">Add to cart</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43e16c279a7cbc69889d95a3add618c3a9f905f31c3157591db4a2342e6bf094?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
          alt=""
          className="object-contain shrink-0 aspect-[1.38] w-[22px]"
        />
      </button>
    </div>
  );
};

export default ProductCard;
