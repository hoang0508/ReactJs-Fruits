import React from "react";
import {
  FaCartPlus,
  FaRegHeart,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
const ProductItem = ({ item }) => {
  return (
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
          <span className="product-select--icon">
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
  );
};

export default ProductItem;
