import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import "./BannerCrops.scss";
const BannerCrops = () => {
  return (
    <div
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-fruit-blue-background-simple-style-blue-sky-image_7416.jpg)`,
      }}
    ></div>
  );
};

export default BannerCrops;
