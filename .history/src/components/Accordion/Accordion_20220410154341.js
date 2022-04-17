import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Accordion.scss";
const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion-header">
        <span className="accordion-heading">Organic</span>
        <span className="accordion-icon">
          <FaPlus />
        </span>
      </div>
      <div className="accordion-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam odio
        consequuntur animi quasi error quibusdam libero, sed tempore qui
        corporis nemo ea itaque distinctio. Provident similique adipisci dolorum
        quos voluptate?
      </div>
    </div>
  );
};

export default Accordion;
