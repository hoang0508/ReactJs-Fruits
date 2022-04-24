import React from "react";
import Banner from "../Banner/Banner";
import BannerCrops from "../Banner/BannerCrops";
import BannerFruits from "../Banner/BannerFruits";
import Feedback from "../layout/Feedback/Feedback";
import Product from "../Product/Product";
import ProductsOrg from "../Product/ProductsOrg";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Product heading="Trending Products" />
      <BannerFruits />
      {/* <Product heading="Organic Shop Of Department" swp="swp"></Product> */}
      <ProductsOrg heading="Organic Shop Of Department"></ProductsOrg>
      <BannerCrops heading="We Are Ensure Of These Types">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </BannerCrops>
      <Product heading="Featured Products" apiF="apiF" />
      <Feedback></Feedback>
    </>
  );
};

export default HomePage;
