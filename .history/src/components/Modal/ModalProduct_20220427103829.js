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
  const random1 = Math.floor(Math.random() * imgThumb.slice(0, 6).length);
  console.log(
    "🚀 ~ file: ModalProduct.js ~ line 12 ~ ModalProduct ~ random1",
    random1
  );

  return (
    <div className="modalP">
      <div className="modalP-content">
        <div className="modalP-content--left">
          <div className="modalP-content--images">
            <img src={item.images} alt="" />
          </div>
          <div className="modalP-content--thumb">
            {imgThumb &&
              imgThumb.length > 0 &&
              imgThumb.slice(random1, random1).map((item) => (
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
