import React from "react";
import bannerCart from "../../assets/img/page-banner-3.jpg";
import { useAuthContext } from "../../components/context/Auth-Context";
import Count from "../../components/Count/Count";
import { FaTrashAlt } from "react-icons/fa";
import "./Cartpage.scss";
import { Button } from "components/button";
const Cartpage = () => {
  const { cartItem, removeCart, totalReducer } = useAuthContext();
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
                <th>Remove</th>
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
                        <div className="cart-count">
                          <Count count1={item.count} />
                        </div>
                      </td>
                      <td>${`${item.total}.00`}</td>
                      <td>
                        <span
                          className="cart-remove"
                          onClick={() => handleRemoveCart(item.id)}
                        >
                          <FaTrashAlt />
                        </span>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>
          </table>
          <div className="cart-total">
            <span style={{ display: "flex" }}>Total:</span>
            <div>${totalReducer}.00</div>
          </div>
          <Button
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="flex mt-[20px] bg-orange-600 text-white"
          >
            Thanh to??n gi??? h??ng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
