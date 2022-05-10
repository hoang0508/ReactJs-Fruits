import React from "react";
import bannerCart from "../../../assets/img/page-banner-3.jpg";
import "./Cartpage.scss";
const Cartpage = () => {
  return (
    <div className="cart">
      <div
        className="cart-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="cart-heading">Cart</h3>
      </div>
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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cartpage;
