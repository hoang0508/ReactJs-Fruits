import React from "react";
import bannerFeedback from "../../../assets/img/testimonial-bg.jpg";
import PageLine from "../../PageLine";
import client1 from "../../../assets/img/client-1.jpg";
import client2 from "../../../assets/img/client-2.jpg";
import client3 from "../../../assets/img/client-3.jpg";
import "./Feedback.scss";

const dataFeetback = [
  {
    id: 1,
    image: `${client1}`,
    name: "Ken Morris",
    job: "Organic Farmer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
  },
  // {
  //   id: 2,
  //   image: `${client2}`,
  //   name: "Lodi Kheda",
  //   job: "Organic Farmer",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
  // },
  // {
  //   id: 3,
  //   image: `${client3}`,
  //   name: "Johansen Lisa",
  //   job: "Organic Farmer",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.",
  // },
];

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
        {dataFeetback &&
          dataFeetback.length > 0 &&
          dataFeetback.map((item) => (
            <div className="banner-feedback--list">
              <div className="banner-feedback--item">
                <div className="banner-feedback--images">
                  <img src={item.image} alt="" />
                </div>
                <div className="banner-feedback--content">
                  <h3>{item.name}</h3>
                  <div>{item.job}</div>
                  <div>{item.content}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feedback;
