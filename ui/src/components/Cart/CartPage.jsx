import React, { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from "../../App";
import CartTable from './CartTable';
import EmptyCart from "./EmptyCart";

function CartPage() {
  // Use context to get cart items and manage them locally for deletions
  const [cartProducts, setCartProducts] = useContext(CartContext);

  // Handler to delete a specific product from the cart.
  const handleDeleteProduct = (productId, productName) => {
    // Filter out the product with the specified ID.
    const updatedCart = cartProducts.filter(product => product._id !== productId);

    // Update the cart context state.
    setCartProducts(updatedCart);

    // Show a success toast notification with the product name.
    toast.success(`"${productName}" has been removed from the cart!`, { duration: 3000, });

  };

  return (
    <div className="mx-60 my-20">
      {cartProducts && cartProducts.length > 0 ? (
        <>
          <CartTable cartItems={cartProducts} onDeleteProduct={handleDeleteProduct} />
          <Toaster />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CartPage;
