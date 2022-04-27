import React from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import Count from "../Count/Count";
import "./ModalPd.scss";
const ModalProduct = ({ urlM }) => {
  // urlM, api
  const { value: item } = useHookAPI(urlM);
  // imgeThumb, api
  const { value: imgThumb } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products`
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
              imgThumb.slice(0, 4).map((item) => (
                <div className="modalP-content--imgThumb">
                  <img src={item.images} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="modalP-content--right">
          <h3 className="modalP-content--title">{item.name}</h3>
          <div className="modalP-content--price">
            <span className="modalP-content--priceNew">{item.priceNew}</span>
            <span className="modalP-content--priceOld">{item.priceOld}</span>
          </div>
          <div className="modalP-content--vote">
            <div className="modalP-content--star"></div>
            <div className="modalP-content--review">
              {Math.floor(Math.random() * 10)} review
            </div>
          </div>
          <div className="modalP-content--desc">{item.content}</div>
          <div>
            <div>
              <Count />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;