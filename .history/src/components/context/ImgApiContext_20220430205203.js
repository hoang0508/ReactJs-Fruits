import { createContext, useContext, useEffect, useState } from "react";
import { useHookAPI } from "../../hooks/useHookAPI";

const imageContext = createContext();

const ImageProvider = ({ images }) => {
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
  const value = { imgThumb, currentImage };

  return <imageContext.Provider value={value}></imageContext.Provider>;
};

function useImageContext() {
  const context = useContext(imageContext);
  if (context === "undefined") {
    throw new Error("invalid context");
  }
  return context;
}
