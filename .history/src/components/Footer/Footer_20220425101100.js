import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
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
            <h3 className="footer-title">Instagram</h3>
            <div className="footer-item--instagram">
              {imgInstagram &&
                imgInstagram.length > 0 &&
                imgInstagram.slice(6).map((item) => (
                  <div className="footer-images--ig" key={item.id}>
                    <img src={item.images} alt="" />
                  </div>
                ))}
            </div>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">Quick Links</h3>
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
          <div className="footer-item">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-info">
              <div className="footer-info--item">
                <div className="footer-info--icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="footer-info--name">Phone</h4>
                  <span className="footer-info--desc">0888 999 888</span>
                </div>
              </div>
              <div className="footer-info--item">
                <div className="footer-info--icon">
                  <FaMailBulk />
                </div>
                <div>
                  <h4 className="footer-info--name">Email</h4>
                  <span className="footer-info--desc">hoang@gmail.com</span>
                </div>
              </div>
              <div className="footer-info--item">
                <div className="footer-info--icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="footer-info--name">Address</h4>
                  <span className="footer-info--desc">
                    Cau Giay, Ha Noi, Viet Nam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
