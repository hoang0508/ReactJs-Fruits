import React from "react";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
  );
};

export default Banner;
