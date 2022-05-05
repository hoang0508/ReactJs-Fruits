import React from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import "./ModalPd.scss";
import { FaTimes } from "react-icons/fa";
import Productdetails from "../Product/Productdetails";
import { ImageProvider, useImageContext } from "../context/ImgApiContext";

const ModalProduct = React.memo(({ urlM, setShow }) => {
  // urlM, api
  const { value: item } = useHookAPI(urlM);
  const { images } = item;
  // close modal
  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <ImageProvider>
      <div className="modalP">
        <div className="modalP-content">
          <div
            className="modalP-content--close"
            onClick={() => handleCloseModal()}
          >
            <FaTimes />
          </div>

          <Productdetails item={item} />
        </div>
      </div>
    </ImageProvider>
  );
});

export default ModalProduct;
