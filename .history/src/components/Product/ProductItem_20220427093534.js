import React, { useState } from "react";
import {
  FaCartPlus,
  FaRegHeart,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import ModalProduct from "../Modal/ModalProduct";
const ProductItem = ({ item }) => {
  const [urlM, setUrlM] = useState(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products`
  );
  const handleModalP = (e, id) => {
    e.preventDefault();
    setUrlM(
      `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products/${id}`
    );
  };
  return (
    <>
      <div className="product-item">
        <div className="product-images">
          <img src={item.images} alt="" />
          <div className="product-select">
            <span className="product-select--icon">
              <FaCartPlus />
            </span>
            <span className="product-select--icon">
              <FaRegHeart />
            </span>
            <span
              className="product-select--icon"
              onClick={(e, id) => handleModalP(e, item.id)}
            >
              <FaSearch />
            </span>
          </div>
        </div>
        <span className="product-seo">Sale</span>
        <div className="product-info">
          <h3 className="product-name">{item.name}</h3>
          <div className="product-price">
            <span className="product-price--new">${item.priceNew}</span>
            <span className="product-price--old">${item.priceOld}</span>
          </div>
          <div className="product-star">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
      <ModalProduct urlM={urlM} />
    </>
  );
};

export default ProductItem;
