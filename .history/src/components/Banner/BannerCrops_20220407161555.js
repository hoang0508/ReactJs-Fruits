import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import "./BannerCrops.scss";
const BannerCrops = () => {
  return (
    <div
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url(https://thumbs.dreamstime.com/z/fresh-fruits-vegetables-health-diet-background-fresh-fruits-banner-health-diet-background-panoramic-wiev-135766918.jpg)`,
      }}
    ></div>
  );
};

export default BannerCrops;
