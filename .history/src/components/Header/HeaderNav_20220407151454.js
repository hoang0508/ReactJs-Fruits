import React, { useEffect, useRef } from "react";
import { FaCartPlus } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.scss";
const HeaderNav = () => {
  const navbar = useRef(null);
  useEffect(() => {
    const handleFixed = () => {
      if (window.scrollY > 500) {
        navbar.current.classList.add("is-fixed");
      } else {
        navbar.current.classList.remove("is-fixed");
      }
    };
    window.addEventListener("scroll", handleFixed);
    return () => {
      window.removeEventListener("scroll", handleFixed);
    };
  }, []);
  return (
    <div className="header-nav" ref={navbar}>
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
            <FaCartPlus className="header-cart--icon" />
            <span className="header-cart--number">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
