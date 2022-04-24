import React from "react";
import discountBgr from "../../../assets/img/overview-bg.jpg";
import "./Discount.scss";
const Discount = () => {
  return (
    <div>
      <div
        className="banner-fixed discount"
        style={{ backgroundImage: `url(${discountBgr})` }}
      >
        <div className="dicount-content">
          <div className="dicount-content--left">
            <h3 className="discount-content--heading">50% Off In This Week</h3>
            <div className="discount-content--desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse
            </div>
            <button className="button--secondary">Discover Now</button>
          </div>
          <div className="dicount-content--right"></div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
