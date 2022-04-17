import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import "./BannerCrops.scss";
const BannerCrops = () => {
  return (
    <div
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/c8/d2/a9/c8d2a920a596ed0fa3a3a588194a2449.jpg)`,
      }}
    ></div>
  );
};

export default BannerCrops;
