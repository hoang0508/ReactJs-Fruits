import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import PageLine from "../PageLine";
import "./BannerCrops.scss";
const BannerCrops = ({ heading, children }) => {
  return (
    <section
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url(${bgrCrops})`,
      }}
    >
      <div className="container">
        <div className="banner-crops--content">
          <span className="banner-crops--txt">Why Choose Us</span>
          <div className="banner-crops--heading">
            <PageLine heading="We Are Ensure Of These Types">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse
            </PageLine>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCrops;
