import React from "react";
import bannerCart from "../../../assets/img/page-banner-3.jpg";
import { useCartContext } from "../../context/Cartcontext";
import "./Cartpage.scss";
const Cartpage = () => {
  const { cartItem } = useCartContext();
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
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
