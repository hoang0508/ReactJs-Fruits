import React from "react";
import bannerCart from "../../../assets/img/page-banner-3.jpg";
import { useImageContext } from "../../context/ImgApiContext";
import Count from "../../Count/Count";
import { FaTrashAlt } from "react-icons/fa";
import "./Cartpage.scss";
const Cartpage = () => {
  const { cartItem } = useImageContext();
  console.log(
    "🚀 ~ file: Cartpage.js ~ line 8 ~ Cartpage ~ cartItem",
    cartItem
  );
  return (
    <div className="cart">
      <div
        className="cart-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="cart-heading">Cart</h3>
      </div>
      <div className="cart-main">
        <div className="container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItem &&
                cartItem.length > 0 &&
                cartItem.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td className="cart-images">
                        <img src={item.images} alt="" />
                      </td>
                      <td className="cart-name">{item.name}</td>
                      <td>${item.priceNew}</td>
                      <td>
                        <Count />
                      </td>
                      <td></td>
                      <td>
                        <FaTrashAlt />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
