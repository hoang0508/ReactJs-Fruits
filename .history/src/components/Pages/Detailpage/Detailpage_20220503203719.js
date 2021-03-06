import React from "react";
import { useParams } from "react-router";
import { useHookAPI } from "../../../hooks/useHookAPI";
import bannerDetails from "../../../assets/img/page-banner-5.jpg";
import "./Detailpage.scss";
import Productdetails from "../../Product/Productdetails";
import { ImageProvider } from "../../context/ImgApiContext";
import Info from "./Info";
const Detailpage = () => {
  const { id } = useParams();
  const { value: item } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products/${id}`
  );
  return (
    <ImageProvider images={item.images}>
      <div className="details">
        <div
          className="details-banner banner-fixed"
          style={{ backgroundImage: `url(${bannerDetails})` }}
        >
          <div className="overlay"></div>
          <h3 className="details-heading">Details Page</h3>
        </div>
        <div className="details-list">
          <div className="container">
            <Productdetails item={item} />
          </div>
        </div>
        <Info item={item} />
      </div>
    </ImageProvider>
  );
};

export default Detailpage;
