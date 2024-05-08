import React, { createContext, useState, useEffect } from "react";
import all_product from "@/constant/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Check if localStorage is available before accessing it
    const storedCartItems =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : null;
    return storedCartItems || getDefaultCart();
  });

  useEffect(() => {
    // Check if localStorage is available before accessing it
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getCartNumber = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const ContextValue = {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    getCartNumber,
  };

  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
