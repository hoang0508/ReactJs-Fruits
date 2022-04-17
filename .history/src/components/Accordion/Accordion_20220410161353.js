import React from "react";
import useHookBoolean from "../../hooks/useHookBoolean";

import "./Accordion.scss";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./AccordionContext";
import AccordionHeader from "./AccordionHeader";

const Accordion = () => {
  return (
    <AccordionProvider>
      <div className="accordion">
        <AccordionHeader></AccordionHeader>
        <AccordionContent></AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
