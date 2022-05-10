import { createContext, useState } from "react";

const cartContext = createContext(undefined);

const CartProvider = () => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (newItem) => {};
  const values = {};
  return <cartContext.Provider value={values}></cartContext.Provider>;
};
