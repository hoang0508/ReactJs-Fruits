import React from "react";
import Banner from "../Banner/Banner";
import BannerCrops from "../Banner/BannerCrops";
import BannerFruits from "../Banner/BannerFruits";
import Product from "../Product/Product";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Product type="orange" heading="Trending Products" />
      <BannerFruits />
      <Product
        type="w"
        heading="Organic Shop Of Department"
        swp="swp"
      ></Product>
      <BannerCrops />
    </>
  );
};

export default HomePage;
