import React from "react";
import { useAccContext } from "./AccordionContext";

const AccordionContent = () => {
  const { show } = useAccContext();
  return (
    <div
      className={`${show ? "accordion-content--active" : "accordion-content"}`}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam odio
      consequuntur animi quasi error quibusdam libero, sed tempore qui corporis
      nemo ea itaque distinctio. Provident similique adipisci dolorum quos
      voluptate?
    </div>
  );
};

export default AccordionContent;
