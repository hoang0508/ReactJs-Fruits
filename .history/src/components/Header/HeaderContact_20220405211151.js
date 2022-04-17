import React from "react";
import {
  FaLocationArrow,
  FaMailBulk,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import "./Header.scss";
const HeaderContact = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-contact">
          <div className="header-info">
            <div className="header-info--add">
              <span>
                <FaLocationArrow />
              </span>
              <span>175 5th Ave Premium Area, New York</span>
            </div>
            <div className="header-info--gmail">
              <span>
                <FaMailBulk />
              </span>
              <span>hh@gmail.com</span>
            </div>
          </div>
          <div className="header-social">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaPinterestP />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
