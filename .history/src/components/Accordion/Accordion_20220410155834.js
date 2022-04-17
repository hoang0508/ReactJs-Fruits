import React from "react";
import useHookBoolean from "../../hooks/useHookBoolean";

import "./Accordion.scss";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

const Accordion = () => {
  const { value: show, handleClickValue: handleClickShow } = useHookBoolean();
  return (
    <div className="accordion">
      <AccordionHeader show={show} onClick={handleClickShow}></AccordionHeader>
      <AccordionContent show={show}></AccordionContent>
    </div>
  );
};

export default Accordion;
