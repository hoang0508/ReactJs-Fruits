import React from "react";
import { useParams } from "react-router";
import { useHookAPI } from "../../../hooks/useHookAPI";
import bannerDetails from "../../../assets/img/page-banner-5.jpg";
const Detailpage = () => {
  const { id } = useParams();
  console.log(id);
  const { value: itemDetails } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products/${id}`
  );
  console.log(
    "🚀 ~ file: Detailpage.js ~ line 9 ~ Detailpage ~ itemDetails",
    itemDetails
  );
  return (
    <div
      className="banner banner-fixed"
      style={{ backgroundImage: `url(${bannerDetails})` }}
    >
      <div></div>
    </div>
  );
};

export default Detailpage;
