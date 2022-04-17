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
      <div>Hello</div>
    </>
  );
};

export default HomePage;
