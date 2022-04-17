import React from "react";
import banner from "../../assets/banner.jpg";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div>
        <div className="banner-heading">Take Natural Taste From Our Shop</div>
        <div className="banner-title">Organic Food Is Good For Health</div>
        <p className="banner-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </p>
        <div className="banner-btn">
          <button className="button button--secondary">Our Shop</button>
          <button className="button button--primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
