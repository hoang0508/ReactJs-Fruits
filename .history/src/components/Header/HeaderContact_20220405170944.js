import React from "react";
import { FaLocationArrow } from "react-icons/fa";
const HeaderContact = () => {
  return (
    <div className="header">
      <div className="header-contact">
        <div className="header-info">
          <div className="header-info--add">
            <span>
              <FaLocationArrow />
            </span>
            <span>175 5th Ave Premium Area, New York</span>
          </div>
          <div className="header-info--gmail">
            <span>FaMailBulk</span>
            <span>hh@gmail.com</span>
          </div>
        </div>
        <div className="header-social">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
