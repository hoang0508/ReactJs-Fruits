import React from "react";
import bannerFruitsImg from "../../assets/detox-water-bg.jpg";
const BannerFruits = () => {
  return (
    <div
      className="banner banner-fruits"
      style={{ backgroundImage: `url(${bannerFruitsImg})` }}
    ></div>
  );
};

export default BannerFruits;
