import React from "react";
import { useAccContext } from "./AccordionContext";

const AccordionContent = () => {
  const { show } = useAccContext();
  return (
    <div
      className={`${show ? "accordion-content--active" : "accordion-content"}`}
    ></div>
  );
};

export default AccordionContent;
