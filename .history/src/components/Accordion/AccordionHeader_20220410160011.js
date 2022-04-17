import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const AccordionHeader = ({ show, onClick }) => {
  return (
    <div className="accordion-header">
      <span className="accordion-heading" onClick={onClick}>
        Organic
      </span>
      {show ? (
        <span className="accordion-icon">
          <FaPlus />
        </span>
      ) : (
        <span className="accordion-icon">
          <FaMinus />
        </span>
      )}
    </div>
  );
};

export default AccordionHeader;
