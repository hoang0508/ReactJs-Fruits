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
  // useLocalStrorage
  const { storedValue: storedCount, setValue: setCountValue } = useLocalStorage(
    "count",
    1
  );
  const [count, setCount] = useState(storedCount);
  // total
  // useLocalStrorage
  const { storedValue: storedTotal, setValue: setTotalValue } = useLocalStorage(
    "totalValue",
    0
  );
  const [total, setTotal] = useState(storedTotal);

  // Add to Cart
  const addToCart = (newItem) => {
    setCartItem((prevItem) => {
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      const itemPriceNew = prevItem.map((item) => item.priceNew);
      console.log(
        "🚀 ~ file: ImgApiContext.js ~ line 45 ~ setCartItem ~ itemPriceNew",
        itemPriceNew
      );
      const totalValue = itemPriceNew * count;
      console.log(
        "🚀 ~ file: ImgApiContext.js ~ line 47 ~ setCartItem ~ totalValue",
        totalValue
      );
      if (isExisted) {
        setValue([...prevItem]);
        // setTotalValue([...totalValue]);
        return [...prevItem];
      }
      // setTotal([...totalValue, totalValue]);
      // setTotalValue([...totalValue, totalValue]);
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
    total,
    setCountValue,
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
