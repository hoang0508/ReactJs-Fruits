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
  const addToCart = (newItem) => {
    setCartItem((prevItem) => {
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      if (isExisted) {
        setValue([...prevItem]);
        return [...prevItem];
      }
      setValue([...prevItem, newItem]);
      return [...prevItem, newItem];
    });
  };
  const removeCart = (newItem) => {
    setCartItem((prevItem) => {
      const remove = prevItem.filter((item) => item.id !== newItem.id);
      setValue(remove);
    });
  };
  const values = {
    imgThumb,
    currentImage,
    setCurrentImage,
    cartItem,
    removeCart,
    addToCart,
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
