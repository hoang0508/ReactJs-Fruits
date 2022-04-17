import React from "react";
import bgrCrops from "../../assets/banner-crops.jpg";
import "./BannerCrops.scss";
const BannerCrops = () => {
  return (
    <div
      className="banner-crops banner-fixed"
      style={{
        backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.pngtree.com%2Ffreebackground%2Fsummer-summer-yellow-fruit_912761.html&psig=AOvVaw38nnJIRqYa9x9JZ3JpRUcD&ust=1649409063293000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPDdj-HNgfcCFQAAAAAdAAAAABA6")`,
      }}
    ></div>
  );
};

export default BannerCrops;
