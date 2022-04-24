import React from "react";
import discountBgr from "../../../assets/img/overview-bg.jpg";
import "./Discount.scss";
const Discount = () => {
  return (
    <div>
      <div
        className="banner-fixed discount"
        style={{ backgroundImage: `url(${discountBgr})` }}
      ></div>
    </div>
  );
};

export default Discount;
