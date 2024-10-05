
import React, { useContext } from "react";
import { CartContext, ProductContext } from "../../App";
import { addToDb } from "../../utility/fakeDB";
import ProductCard from "./ProductCard";

const demoProducts = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2701dd50cb3d0fc0d1c60287a0e4fe1ddc4118358f34d897fbe393e4d2033b6a?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    discount: "45%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b28932ea12c802c58b84c8d7a63e96c47348d34871636b6ff2c5bdf510f8b8e?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    name: "Thomas' Everything Bagels – 20oz_6ct",
    rating: 3,
    originalPrice: "4.50",
    discountedPrice: "2.50",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2701dd50cb3d0fc0d1c60287a0e4fe1ddc4118358f34d897fbe393e4d2033b6a?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    discount: "45%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b28932ea12c802c58b84c8d7a63e96c47348d34871636b6ff2c5bdf510f8b8e?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    name: "Thomas' Everything Bagels – 20oz_6ct",
    rating: 3,
    originalPrice: "4.50",
    discountedPrice: "2.50",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2701dd50cb3d0fc0d1c60287a0e4fe1ddc4118358f34d897fbe393e4d2033b6a?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    discount: "45%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b28932ea12c802c58b84c8d7a63e96c47348d34871636b6ff2c5bdf510f8b8e?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    name: "Thomas' Everything Bagels – 20oz_6ct",
    rating: 3,
    originalPrice: "4.50",
    discountedPrice: "2.50",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2701dd50cb3d0fc0d1c60287a0e4fe1ddc4118358f34d897fbe393e4d2033b6a?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    discount: "45%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b28932ea12c802c58b84c8d7a63e96c47348d34871636b6ff2c5bdf510f8b8e?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    name: "Thomas' Everything Bagels – 20oz_6ct",
    rating: 3,
    originalPrice: "4.50",
    discountedPrice: "2.50",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2701dd50cb3d0fc0d1c60287a0e4fe1ddc4118358f34d897fbe393e4d2033b6a?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    discount: "45%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b28932ea12c802c58b84c8d7a63e96c47348d34871636b6ff2c5bdf510f8b8e?placeholderIfAbsent=true&apiKey=8da3fd6b121a4ce09e18e7d9dae826f0",
    name: "Thomas' Everything Bagels – 20oz_6ct",
    rating: 3,
    originalPrice: "4.50",
    discountedPrice: "2.50",
  },
];

const ProductGrid = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);

  // Handle Cart Data with Toast Messages
  const handleAddToCart = product => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }

    setCart(newCart)
    addToDb(product.id)
    // toast.info('Info: Product Added!', { autoClose: 500 })
  }

  console.log('ProductGrid=>', products);
  console.log('Cart=>', cart);

  return (
    <section className="">
      <div className="grid grid-cols-3 gap-6 max-md:flex-col">
        {demoProducts.map((product) => (
          <ProductCard
            key={product.id}
            productItem={product}
            handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
