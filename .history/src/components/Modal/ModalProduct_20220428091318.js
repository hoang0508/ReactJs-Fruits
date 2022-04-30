import React, { useEffect, useMemo, useState } from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import Count from "../Count/Count";
import "./ModalPd.scss";
import { FaStar } from "react-icons/fa";
import Checkbox from "../Box/Checkbox";
import Social from "../Media/Social";
import { FaTimes } from "react-icons/fa";
const ModalProduct = React.memo(({ urlM, setShow }) => {
  // urlM, api
  const { value: item } = useHookAPI(urlM);
  const { images } = item;
  // console.log(
  //   "🚀 ~ file: ModalProduct.js ~ line 13 ~ ModalProduct ~ images",
  //   images
  // );
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
        <div className="modalP-content--list">
          <div className="modalP-content--left">
            <div className="modalP-content--images">
              <img src={currentImage} alt="" />
            </div>
            <div className="modalP-content--thumb">
              {imgThumb &&
                imgThumb.length > 0 &&
                imgThumb.slice(0, 4).map((item) => (
                  <div
                    className="modalP-content--imgThumb"
                    key={item.id}
                    onClick={() => setCurrentImage(item.images)}
                  >
                    <img src={item.images} alt="" />
                  </div>
                ))}
            </div>
          </div>
          <div className="modalP-content--right">
            <h3 className="modalP-content--title">{item.name}</h3>
            <div className="modalP-content--price">
              <span className="modalP-content--priceNew">${item.priceNew}</span>
              <span className="modalP-content--priceOld">${item.priceOld}</span>
            </div>
            <div className="modalP-content--vote">
              <div className="modalP-content--star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="modalP-content--review">
                {randomReview} review
              </div>
            </div>
            <div className="modalP-content--desc">{item.content}</div>
            <div className="modalP-content--cart">
              <div>
                <Count />
              </div>
              <button className="button button--secondary">Add to cart</button>
            </div>
            <div>
              <Checkbox>I agree with the terms and conditions</Checkbox>
            </div>
            <button className="modalP-btn">Buy it now!</button>
            <div className="modalP-social">
              Share: <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModalProduct;
