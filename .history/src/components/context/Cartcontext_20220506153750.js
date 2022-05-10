import { createContext, useContext, useState } from "react";

const cartContext = createContext(undefined);

const CartProvider = ({ children, ...props }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (newItem) => {
    setCartItem((prevItem) => {
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      if (isExisted) {
        return [...prevItem];
      }
      return [...prevItem, newItem];
    });
  };
  const values = { cartItem, addToCart };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

function useCartContext() {
  const context = useContext(cartContext);
  if (typeof context === "undefined") {
    throw new Error("invalid context provider");
  }
  return context;
}

export { useCartContext, CartProvider };
