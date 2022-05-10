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
  // const { storedValue: storedCount, setValue: setCountValue } = useLocalStorage(
  //   "count",
  //   1
  // );
  // Count
  const [count, setCount] = useState(1);
  const handleCountMinus = () => {
    if (count > 0) {
      setCount((count) => count - 1);
      // setCountValue(() => count - 1);
    }
  };
  const handleCountPlus = () => {
    setCount((count) => count + 1);

    // setCountValue(() => count + 1);
  };
  // total
  // useLocalStrorage
  // const { storedValue: storedTotal, setValue: setTotalValue } = useLocalStorage(
  //   "totalValue",
  //   0
  // );
  const [total, setTotal] = useState("");

  // Add to Cart
  const addToCart = (newItem) => {
    setCartItem((prevItem) => {
      newItem.count = count;
      newItem.total = total;
      const isExisted = prevItem.some((item) => item.id === newItem.id);
      const totalValue = [newItem.priceNew * newItem.count];
      setTotal(totalValue);
      console.log(
        "🚀 ~ file: Auth-Context.js ~ line 62 ~ setCartItem ~ totalValue",
        totalValue
      );
      // setTotalValue(totalValue);
      if (isExisted) {
        setValue([...prevItem]);
        prevItem.count = count;
        prevItem.total = total;
        let itemPriceNew = prevItem.map((item) => item.priceNew);
        const totalValue = [itemPriceNew * prevItem.count];
        // setTotalValue(totalValue);
        setTotal(totalValue);
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
    total,
    handleCountMinus,
    handleCountPlus,
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
