import React from "react";
import Banner from "../Banner/Banner";
import BannerCrops from "../Banner/BannerCrops";
import BannerFruits from "../Banner/BannerFruits";
import Product from "../Product/Product";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Product heading="Trending Products" />
      <BannerFruits />
      <Product heading="Organic Shop Of Department" swp="swp"></Product>
      <BannerCrops heading="We Are Ensure Of These Types">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </BannerCrops>
      <div>hello</div>
    </>
  );
};

export default HomePage;
