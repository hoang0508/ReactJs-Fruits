import React from "react";
import bannerCart from "../../../assets/img/page-banner-3.jpg";
const Cartpage = () => {
  return (
    <div className="cart">
      <div
        className="details-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="details-heading">Details Page</h3>
      </div>
    </div>
  );
};

export default Cartpage;
