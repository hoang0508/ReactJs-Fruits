import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const AccordionHeader = () => {
  return (
    <div className="accordion-header">
      <span className="accordion-heading">Organic</span>
      <span className="accordion-icon">
        <FaPlus />
      </span>
    </div>
  );
};

export default AccordionHeader;
