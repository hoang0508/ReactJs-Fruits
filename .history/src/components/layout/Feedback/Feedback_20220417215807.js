import React from "react";
import bannerFeedback from "../../../assets/img/testimonial-bg.jpg";
import PageLine from "../../PageLine";
import "./Feedback.scss";
const Feedback = ({ heading }) => {
  return (
    <div
      className="banner-fixed banner-feedback"
      style={{ background: `url(${bannerFeedback})` }}
    >
      <div className="overlay"></div>
      <div className="banner-feedback--heading">
        <PageLine heading={heading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
          suspendisse
        </PageLine>
      </div>
    </div>
  );
};

export default Feedback;
