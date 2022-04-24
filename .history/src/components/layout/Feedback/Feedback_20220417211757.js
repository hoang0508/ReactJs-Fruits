import React from "react";
import bannerFeedback from "../../assets/img/testimonial-bg.jpg";
const Feedback = () => {
  return (
    <div
      className="banner-fixed banner-feedback"
      style={{ background: `url(${bannerFeedback})` }}
    ></div>
  );
};

export default Feedback;
