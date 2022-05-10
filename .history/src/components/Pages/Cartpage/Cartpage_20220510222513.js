import React from "react";
import bannerCart from "../../../assets/img/page-banner-3.jpg";
import { useImageContext } from "../../context/Auth-Context.js";
import Count from "../../Count/Count";
import { FaTrashAlt } from "react-icons/fa";
import "./Cartpage.scss";
const Cartpage = () => {
  const { cartItem, removeCart, totalReducer } = useImageContext();
  const handleRemoveCart = (id) => {
    removeCart(id);
    console.log("remove cart");
  };
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
                    <tr className="cart-item">
                      <td className="cart-images">
                        <img src={item.images} alt="" />
                      </td>
                      <td className="cart-name">{item.name}</td>
                      <td>${item.priceNew}</td>
                      <td>
                        <Count count1={item.count} />
                      </td>
                      <td>${`${item.total}.00`}</td>
                      <td onClick={() => handleRemoveCart(item.id)}>
                        <FaTrashAlt />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>
          </table>
          <div>${totalReducer}.00</div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;