import React from "react";
import bannerFruitsBgr from "../../assets/detox-water-bg.jpg";
import bannerFruitsImg from "../../assets/detox-water-bg.png";

import PageLine from "../PageLine";
const BannerFruits = () => {
  return (
    <div
      className="banner banner-fruits"
      style={{ backgroundImage: `url(${bannerFruitsBgr})` }}
    >
      <PageLine heading="Collect Detox Water From Organic Shop">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
      <div className="banner-fruits--images">
        <img src={bannerFruitsImg} alt="" />
      </div>
    </div>
  );
};

export default BannerFruits;
