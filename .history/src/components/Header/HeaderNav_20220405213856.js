import React from "react";
import logo from "../../assets/logo.png";
const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
