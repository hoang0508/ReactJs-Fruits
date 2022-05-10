import React from "react";
import bannerCart from "../../../assets/img/page-banner-3.jpg";
const Cartpage = () => {
  return (
    <div className="cart">
      <div
        className="cart-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="cart-heading">Cart</h3>
      </div>
    </div>
  );
};

export default Cartpage;
