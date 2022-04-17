import React from "react";
import bgrCrops from "../../assets/why-choose-bg.jpg";
const BannerCrops = () => {
  return (
    <div
      className="banner-crops banner-fixed"
      style={{ backgroundImage: `url(${bgrCrops})` }}
    ></div>
  );
};

export default BannerCrops;
