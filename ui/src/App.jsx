import { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);


function App() {
  // Fetch Products Data
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://mrittik-server.vercel.app/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Load Cart Data
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
