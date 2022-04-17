import React from "react";
import Banner from "../Banner/Banner";
import BannerFruits from "../Banner/BannerFruits";
import Product from "../Product/Product";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Product type="orange" heading="Trending Products" />
      <BannerFruits />
      <Product type="k" heading="Organic Shop Of Department"></Product>
    </>
  );
};

export default HomePage;
