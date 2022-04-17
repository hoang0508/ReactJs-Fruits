import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import "./BannerCrops.scss";
const BannerCrops = ({ heading, children }) => {
  return (
    <div
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url(${bgrCrops})`,
      }}
    >
      <div className="">
        <span className="banner-crops--txt">Why Choose Us</span>
        <div>
          <div className="page-heading"></div>
          <div className="page-desc"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerCrops;
