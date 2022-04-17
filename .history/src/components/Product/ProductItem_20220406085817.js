import React from "react";
import {
  FaCartPlus,
  FaHeart,
  FaSearch,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
const ProductItem = () => {
  return (
    <div className="product">
      <div className="product-heading page-center">
        <h3 className="page-heading">Trending Products</h3>
        <h3 className="page-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </h3>
      </div>
      <div className="product-list">
        <div className="pruduct-item">
          <div className="product-images">
            <img src="" alt="" />
          </div>
          <span className="product-seo">New</span>
          <div className="product-select">
            <span className="product-select--icon">
              <FaCartPlus />
            </span>
            <span className="product-select--icon">
              <FaHeart />
            </span>
            <span className="product-select--icon">
              <FaSearch />
            </span>
          </div>
          <div className="product-info">
            <h3 className="product-name">Darling Oranges</h3>
            <div className="product-price">
              <span>$38.00</span>
              <span className="product-price--old">$125.00</span>
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
      </div>
    </div>
  );
};

export default ProductItem;
