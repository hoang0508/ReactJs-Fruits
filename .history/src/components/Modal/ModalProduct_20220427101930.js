import React from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import "./ModalPd.scss";
const ModalProduct = ({ urlM }) => {
  // urlM
  const { value: item } = useHookAPI(urlM);
  //
  const { value: imgThumb } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products`
  );
  const random1 = Math.floor(Math.random() * imgThumb.slice(0, 4).length);
  const random2 = Math.floor(Math.random() * imgThumb.slice(5, 9).length);

  return (
    <div className="modalP">
      <div className="modalP-content">
        <div className="modalP-content--left">
          <div className="modal-content--images">
            <img src={item.images} alt="" />
          </div>
          <div className="modal-content--thumb">
            {imgThumb &&
              imgThumb.length > 0 &&
              imgThumb.slice(random1, random2).map((item) => (
                <div className="model-content--imgThumb">
                  <img src={item.images} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="modalP-content--right"></div>
      </div>
    </div>
  );
};

export default ModalProduct;
