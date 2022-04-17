import React from "react";
import logo from "../../assets/logo.png";
const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header-menu">
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
      </div>
    </div>
  );
};

export default HeaderNav;
