import React from "react";
import useHookBoolean from "../../hooks/useHookBoolean";

import "./Accordion.scss";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./AccordionContext";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({ item }) => {
  const { heading, content } = item;
  return (
    <AccordionProvider>
      <div className="accordion">
        <AccordionHeader heading={heading}></AccordionHeader>
        <AccordionContent comtent={content}></AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
