import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast"; // Import toast and Toaster
import { CartContext, ProductContext } from "../../App";
import { addToDb } from "../../utility/fakeDB";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);

  // Handle Cart Data with Toast Messages
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (existingProduct) => existingProduct._id === product._id
    );

    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct._id !== product._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(product.id);

    // Trigger toast notification
    toast.success(`${product.name} added to cart successfully!`);
  };

  return (
    <section className="">
      <Toaster />
      <div className="grid grid-cols-3 gap-6 max-md:flex-col">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productItem={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
