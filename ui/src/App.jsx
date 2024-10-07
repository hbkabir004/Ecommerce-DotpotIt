import { createContext, useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);


function App() {
  // Fetch Products Data
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dotpot-user-auth.vercel.app/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Load Cart Data
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
