import { useState } from "react";
import all_product from "@/constant/all_product";

const getDefaultCart = () => {
  const cart = {}; //create empty object to receive key=>cart[i] => product-id , value=> product-quantity
  for (let i = 0; i < all_product.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const useItemsCart = () => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // //key(id)[itemId]: value(quantity) prev[itemId] + 1
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]+1 }));
    console.log(cartItems)
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]-1 }));
    console.log(cartItems);
  };
  return { cartItems , addToCart, removeFromCart ,all_product};
};

export default useItemsCart;
