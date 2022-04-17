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
            <a href="#" className="header-menu--link"></a>
          </li>
          <li className="header-menu--item">
            <a href="#" className="header-menu--link"></a>
          </li>
          <li className="header-menu--item">
            <a href="#" className="header-menu--link"></a>
          </li>
          <li className="header-menu--item">
            <a href="#" className="header-menu--link"></a>
          </li>
          <li className="header-menu--item">
            <a href="#" className="header-menu--link"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
