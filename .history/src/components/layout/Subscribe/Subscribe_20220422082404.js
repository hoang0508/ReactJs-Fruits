import React from "react";
import PageLine from "../../PageLine";
import "./Subscribe.scss";
const Subscibe = ({ heading }) => {
  return (
    <div className="bgr-product subscribe">
      <div className="container subscribe-container">
        <div className="subscribe-content">
          <PageLine heading={heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse
          </PageLine>
        </div>
        <div className="subscribe-email">
          <input type="text" />
          <button className="button button--primary">Subscibe now</button>
        </div>
      </div>
    </div>
  );
};

export default Subscibe;
