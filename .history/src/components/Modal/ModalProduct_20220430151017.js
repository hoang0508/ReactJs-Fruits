import React, { useEffect, useMemo, useState } from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import "./ModalPd.scss";
import { FaTimes } from "react-icons/fa";
import Productdetails from "../Product/Productdetails";
const ModalProduct = React.memo(({ urlM, setShow }) => {
  // urlM, api
  const { value: item } = useHookAPI(urlM);
  const { images } = item;

  // imgeThumb, api
  const { value: imgThumb } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products`
  );
  // close modal
  const handleCloseModal = () => {
    setShow(false);
  };
  // Click current images;
  const [currentImage, setCurrentImage] = useState(images);
  useEffect(() => {
    if (images) {
      setCurrentImage(images);
    }
  }, [images]);
  // random , useMemo
  const randomReview = useMemo(() => Math.floor(Math.random() * 10), []);
  return (
    <div className="modalP">
      <div className="modalP-content">
        <div
          className="modalP-content--close"
          onClick={() => handleCloseModal()}
        >
          <FaTimes />
        </div>
        <Productdetails
          randomReview={randomReview}
          imgThumb={imgThumb}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          item={item}
        />
      </div>
    </div>
  );
});

export default ModalProduct;
