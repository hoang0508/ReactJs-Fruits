import React from "react";
import Banner from "../Banner/Banner";
import BannerCrops from "../Banner/BannerCrops";
import BannerFruits from "../Banner/BannerFruits";
import Discount from "../layout/Discount/Discount";
import Feedback from "../layout/Feedback/Feedback";
import LastestBlog from "../layout/LastesBlog/LastestBlog";
import Subscribe from "../layout/Subscribe/Subscribe";
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
      <Feedback heading="Client’s Feedback"></Feedback>
      <Product heading="Best Sellers Products" swp="swp"></Product>
      <Discount></Discount>
      <div className="bgr-product">
        <Product heading="Most Viewed Products This Month" swp="swp"></Product>
      </div>
      <LastestBlog heading="Latest Blog"></LastestBlog>
      <Subscribe heading="Subscribe To Our Newsletter"></Subscribe>
      <div>Hello</div>
    </>
  );
};

export default HomePage;
