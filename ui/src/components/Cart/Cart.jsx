import React, { useContext } from "react";
import { CartContext } from "../../App";
import EmptyCart from "./EmptyCart";
import ProductTable from './ProductTable';

function Cart() {
  const cartProducts = useContext(CartContext);
  cartProducts.pop();

  return (
    <div className="mx-60 my-20">
      {
        (!cartProducts) ?
          <EmptyCart /> :
          <ProductTable cartItems={cartProducts} />
      }
    </div>
  );
}

export default Cart;
