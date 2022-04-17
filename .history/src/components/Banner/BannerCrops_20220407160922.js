import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import "./BannerCrops.scss";
const BannerCrops = () => {
  return (
    <div
      className="banner-crops banner-fixed"
      style={{ backgroundImage: `url(${bgrCrops})` }}
    ></div>
  );
};

export default BannerCrops;
