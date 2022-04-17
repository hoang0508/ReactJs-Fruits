import React from "react";
import useHookBoolean from "../../hooks/useHookBoolean";

import "./Accordion.scss";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./AccordionContext";
import AccordionHeader from "./AccordionHeader";

const dataAcc = [
  {
    id: 1,
    heading: "Organic",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse",
  },
  {
    id: 2,
    heading: "Fast And Easy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse",
  },
  {
    id: 3,
    heading: "High Quality",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse",
  },
];

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
