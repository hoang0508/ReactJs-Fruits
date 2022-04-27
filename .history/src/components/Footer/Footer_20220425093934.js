import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { useHookAPI } from "../../hooks/useHookAPI";
import "./Footer.scss";
const Footer = () => {
  const { value: imgInstagram } = useHookAPI(
    `https://625ae83c398f3bc782a7f96e.mockapi.io/productsorg/productorg`
  );
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
          <div className="footer-item">
            <h3 className="footer-title">
              <div className="footer-item--instagram">
                {imgInstagram &&
                  imgInstagram.length > 0 &&
                  imgInstagram.slice(7).map((item) => (
                    <div className="footer-images--ig" key={item.id}>
                      <img src={item.images} alt="" />
                    </div>
                  ))}
              </div>
            </h3>
          </div>
          <div className="footer-item">
            <ul className="footer-menu">
              <li>
                <a href="#" className="footer-link">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
