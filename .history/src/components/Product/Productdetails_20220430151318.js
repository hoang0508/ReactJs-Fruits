import React from "react";
import { FaStar } from "react-icons/fa";
import Checkbox from "../Box/Checkbox";
import Count from "../Count/Count";
import Social from "../Media/Social";
import "./Productdetails.scss";

const Productdetails = ({
  randomReview,
  currentImage,
  imgThumb,
  setCurrentImage,
  item,
}) => {
  return (
    <div className="productD-content--list">
      <div className="productD-content--left">
        <div className="productD-content--images">
          <img src={currentImage} alt="" />
        </div>
        <div className="productD-content--thumb">
          {imgThumb &&
            imgThumb.length > 0 &&
            imgThumb.slice(0, 4).map((item) => (
              <div
                className="productD-content--imgThumb"
                key={item.id}
                onClick={() => setCurrentImage(item.images)}
              >
                <img src={item.images} alt="" />
              </div>
            ))}
        </div>
      </div>
      <div className="productD-content--right">
        <h3 className="productD-content--title">{item.name}</h3>
        <div className="productD-content--price">
          <span className="productD-content--priceNew">${item.priceNew}</span>
          <span className="productD-content--priceOld">${item.priceOld}</span>
        </div>
        <div className="productD-content--vote">
          <div className="productD-content--star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="productD-content--review">{randomReview} review</div>
        </div>
        <div className="productD-content--desc">{item.content}</div>
        <div className="productD-content--cart">
          <div>
            <Count />
          </div>
          <button className="button button--secondary">Add to cart</button>
        </div>
        <div>
          <Checkbox>I agree with the terms and conditions</Checkbox>
        </div>
        <button className="productD-btn">Buy it now!</button>
        <div className="productD-social">
          Share: <Social />
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
