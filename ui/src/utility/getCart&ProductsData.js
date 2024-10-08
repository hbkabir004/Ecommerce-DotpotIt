import axios from 'axios';
import { getStoredCart } from './fakeDB';

export const productsAndCartData = async () => {
  // Fetching Data from APIs
  const productsData = await axios.get(`https://dotpot-user-auth.vercel.app/products`);

  const products = productsData.data;
  // console.log(`getCart&ProductsData=>${productsD}`);
  

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
