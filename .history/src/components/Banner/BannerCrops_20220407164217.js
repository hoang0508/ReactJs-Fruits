import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import "./BannerCrops.scss";
const BannerCrops = ({ heading, children }) => {
  return (
    <section
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url(${bgrCrops})`,
      }}
    >
      <div className="container">
        <div className="banner-crops--content">
          <span className="banner-crops--txt">Why Choose Us</span>
          <div>
            <div className="page-heading">{heading}</div>
            <div className="page-desc banner-crops--desc">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCrops;
