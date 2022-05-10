import { createContext, useContext, useEffect, useState } from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import useLocalStorage from "../../hooks/useLocalStrorage";

const ImageContext = createContext(undefined);

const ImageProvider = ({ images, children, ...props }) => {
  // imgeThumb, api
  const { value: imgThumb } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products`
  );
  // Click current images;
  const [currentImage, setCurrentImage] = useState(images);
  useEffect(() => {
    if (images) {
      setCurrentImage(images);
    }
  }, [images]);

  // Cart
  // useLocalStrorage
  const { storedValue, setValue } = useLocalStorage("cartValue", []);
  // CartItem
  const [cartItem, setCartItem] = useState(storedValue);
  // count
  const [count, setCount] = useState(1);
  // Add to Cart
  const addToCart = (newItem) => {
    setCartItem((prevItem) => {
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      if (isExisted) {
        const total = prevItem.reduce(
          (prevValue, currentValue) => prevValue * currentValue,
          count
        );
        setValue([...prevItem], total);
        return [...prevItem];
      }
      setValue([...prevItem, newItem]);
      return [...prevItem, newItem];
    });
  };
  // Remove Cart
  const removeCart = (id) => {
    setCartItem((prevItem) => {
      const remove = prevItem.filter((item) => item.id !== id);
      setValue(remove);
      return remove;
    });
  };
  const values = {
    imgThumb,
    currentImage,
    setCurrentImage,
    cartItem,
    removeCart,
    addToCart,
    count,
    setCount,
  };

  return (
    <ImageContext.Provider value={values} {...props}>
      {children}
    </ImageContext.Provider>
  );
};

function useImageContext() {
  const context = useContext(ImageContext);
  if (typeof context === "undefined")
    throw new Error("useImageContext must be used within a Provider");
  return context;
}

export { useImageContext, ImageProvider };
