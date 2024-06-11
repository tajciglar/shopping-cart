import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log(item)
    setCart((prevCart) => {
      
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex >= 0) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        return updatedCart;
      } else {
        return [...prevCart, { ...item}];
      }
    });
  };

  // Updates state
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
