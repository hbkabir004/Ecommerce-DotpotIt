import axios from 'axios';
import { getStoredCart } from './fakeDB';

export const productsAndCartData = async () => {
  // const [query, setQuery] = useContext(QueryContext);
  // Fetching Data from APIs
  const productsData = await axios.get(`https://dotpot-user-auth.vercel.app/products`)

  // Fetching Data from JSON (Local)
  // const productsData = await fetch('data/products.json')
  
  const products = productsData.data;
  
  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return { products, initialCart }
}
