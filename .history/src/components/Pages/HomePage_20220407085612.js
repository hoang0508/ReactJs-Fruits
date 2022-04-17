import React from "react";
import Banner from "../Banner/Banner";
import BannerFruits from "../Banner/BannerFruits";
import Product from "../Product/Product";
import "../../index.scss";
const HomePage = () => {
  return (
    <>
      <Banner />
      <Product type="orange" />
      <BannerFruits />
      <div>Hello</div>
    </>
  );
};

export default HomePage;
