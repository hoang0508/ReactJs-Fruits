import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-list">
          <div className="footer-logo">
            <span>Orgo</span>
            <p className="footer-logo--desc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt labore dolore magna aliqua.
            </p>
            <div className="footer-social">
              <div className="footer-social--icon">
                <FaFacebookF />
              </div>
              <div className="footer-social--icon">
                <FaTwitter />
              </div>
              <div className="footer-social--icon">
                <FaPinterestP />
              </div>
              <div className="footer-social--icon">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="footer-item"></div>
          <div className="footer-item"></div>
          <div className="footer-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
