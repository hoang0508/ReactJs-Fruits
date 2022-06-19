import React from "react";
import bannerCart from "../../assets/img/page-banner-3.jpg";
import "./Contact.scss";
import { FaMailBulk, FaMapMarkerAlt, FaHeadphones } from "react-icons/fa";
import FormUseHook from "components/Form/FormUseHook";
import PageLine from "components/PageLine";
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
      <div className="contact-maps">
        <iframe
          width="100%"
          height="500"
          border="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6575906466296!2d105.78278231429816!3d21.046382392553813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb158a2305d%3A0x5c357d21c785ea3d!2zxJDhuqFpIGjhu41jIMSQaeG7h24gTOG7sWM!5e0!3m2!1svi!2s!4v1620222558644!5m2!1svi!2s"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mt-3">
        <PageLine heading="Ready To Get Started?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </PageLine>
      </div>
      <div>
        <FormUseHook></FormUseHook>
      </div>
    </div>
  );
};

export default Contact;
