import React from "react";
import { useParams } from "react-router";
import { useHookAPI } from "../../../hooks/useHookAPI";
import bannerDetails from "../../../assets/img/page-banner-5.jpg";
import "./Detailpage.scss";
import Productdetails from "../../Product/Productdetails";
import { useImageContext } from "../../context/ImgApiContext";
const Detailpage = () => {
  const { id } = useParams();
  console.log(id);
  const { value: item } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products/${id}`
  );

  return (
    <div className="details">
      <div
        className="details-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerDetails})` }}
      >
        <div className="overlay"></div>
        <h3 className="details-heading">Details Page</h3>
      </div>
      <div>
        <Productdetails item={item} />
      </div>
    </div>
  );
};

export default Detailpage;
