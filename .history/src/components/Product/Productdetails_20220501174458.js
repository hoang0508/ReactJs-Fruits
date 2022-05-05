import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Checkbox from "../Box/Checkbox";
import { useImageContext } from "../context/ImgApiContext";
import Count from "../Count/Count";
import Social from "../Media/Social";
import "./Productdetails.scss";

const Productdetails = ({ item }) => {
  const { imgThumb, currentImage, setCurrentImage } = useImageContext();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOnpen] = useState(false);
  const imagesThumb =
    imgThumb &&
    imgThumb.length > 0 &&
    imgThumb.slice(0, 4).map((item) => item.images);
  const handleClickCurrent = () => {
    const indexImg = imagesThumb.findIndex((item) => item === currentImage);
    setPhotoIndex(indexImg);
    setIsOnpen(true);
  };
  return (
    <>
      <div className="productD--list">
        <div className="productD--left">
          <div className="productD--images">
            <img
              src={currentImage}
              alt=""
              onClick={() => handleClickCurrent()}
            />
          </div>
          <div className="productD--thumb">
            {imgThumb &&
              imgThumb.length > 0 &&
              imgThumb.slice(0, 4).map((item) => (
                <div
                  className="productD--imgThumb"
                  key={item.id}
                  onClick={() => setCurrentImage(item.images)}
                >
                  <img src={item.images} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="productD--right">
          <h3 className="productD--title">{item.name}</h3>
          <div className="productD--price">
            <span className="productD--priceNew">${item.priceNew}</span>
            <span className="productD--priceOld">${item.priceOld}</span>
          </div>
          <div className="productD--vote">
            <div className="productD--star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="productD--review"> review</div>
          </div>
          <div className="productD--desc">{item.content}</div>
          <div className="productD--cart">
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
      {isOpen && (
        <Lightbox
          mainSrc={imgThumb[photoIndex]}
          nextSrc={imgThumb[(photoIndex + 1) % imgThumb.length]}
          prevSrc={
            imgThumb[(photoIndex + imgThumb.length - 1) % imgThumb.length]
          }
          onCloseRequest={() => setIsOnpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              () => (photoIndex + imgThumb.length - 1) % imgThumb.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              () => (photoIndex + imgThumb.length + 1) % imgThumb.length
            )
          }
        />
      )}
    </>
  );
};

export default Productdetails;
