import React, { useContext } from "react";
import { CartContext } from "../../App";
import ProductTable from './ProductTable';

function Cart() {
  const cartProducts = useContext(CartContext);
  console.log({ cartProducts });

  return (
    <div className="mx-60 my-20">
      {
        (!cartProducts) ? <div className="flex flex-col items-center mx-auto font-bold text-center max-w-[760px] py-20">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2551d2d090191e24aaa5cad28e815cd95dc870a898179eb1f05ed34ab733b1ba?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0"
            className="object-contain w-40 max-w-full aspect-square"
            alt="Empty cart illustration"
          />
          <p className="self-stretch px-16 py-6 mt-16 w-full text-lg tracking-tight text-red-500 uppercase border border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
            Your cart is currently empty.
          </p>

          <button className="px-5 py-4 mt-5 max-w-full text-sm tracking-tight leading-3 text-white rounded-lg bg-neutral-800 w-[237px]">
            Return to shop
          </button>
        </div> : <ProductTable cartItems={cartProducts} />
      }
    </div>
  );
}

export default Cart;
