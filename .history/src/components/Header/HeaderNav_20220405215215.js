import React from "react";
import { FaCartPlus } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.scss";
const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-menu">
          <ul className="header-menu--list">
            <li className="header-menu--item">
              <a href="#" className="header-menu--link">
                Home
              </a>
            </li>
            <li className="header-menu--item">
              <a href="#" className="header-menu--link">
                Pages
              </a>
            </li>
            <li className="header-menu--item">
              <a href="#" className="header-menu--link">
                Service
              </a>
            </li>
            <li className="header-menu--item">
              <a href="#" className="header-menu--link">
                Blog
              </a>
            </li>
            <li className="header-menu--item">
              <a href="#" className="header-menu--link">
                Contact
              </a>
            </li>
          </ul>
          <div className="header-cart">
            <FaCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
