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
    <section className="product">
      <div className="container">
        <div className="product-heading page-center">
          <h3 className="page-heading">Trending Products</h3>
          <h3 className="page-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse
          </h3>
        </div>
        <div className="product-list">
          <div className="product-item">
            <div className="product-images">
              <img
                src="https://media.istockphoto.com/photos/delicious-fruit-salad-on-a-plate-on-table-picture-id1298307574?b=1&k=20&m=1298307574&s=170667a&w=0&h=d1VWlyALXWare4uxuTxuK5he0Dtp5dRzpC2Sy2gOKyk="
                alt=""
              />
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
    </section>
  );
};

export default ProductItem;
