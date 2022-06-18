import React from "react";
import bannerCart from "../../assets/img/page-banner-3.jpg";
import "./Contact.scss";
import { FaMailBulk, FaMapMarkerAlt, FaHeadphones } from "react-icons/fa";
const dataContact = [
  {
    id: 1,
    icon: <FaMailBulk />,
    title: "Email Here",
    address: "hello@orgo.com",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    title: "Location Here",
    address: "2750 Quadra Street Victoria Road, New York, Canada",
  },
  {
    id: 3,
    icon: <FaHeadphones />,
    title: "Call Here",
    address: "+123 456 7890",
  },
];

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="contact-banner banner-fixed"
        style={{ backgroundImage: `url(${bannerCart})` }}
      >
        <div className="overlay"></div>
        <h3 className="cart-heading">Cart</h3>
      </div>
      <div className="container">
        <div className="contact-list">
          {dataContact &&
            dataContact.length > 0 &&
            dataContact.map((item) => (
              <div className="contact-item" key={item.id}>
                <div className="contact-item--icon">{item.icon}</div>
                <h3 className="contact-item--title">{item.title}</h3>
                <div className="contact-item--address">{item.address}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
