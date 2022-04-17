import React from "react";
import bannerFruitsImg from "../../assets/detox-water-bg.jpg";
import PageLine from "../PageLine";
const BannerFruits = () => {
  return (
    <div
      className="banner banner-fruits"
      style={{ backgroundImage: `url(${bannerFruitsImg})` }}
    >
      <PageLine heading="Collect Detox Water From Organic Shop">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
    </div>
  );
};

export default BannerFruits;
