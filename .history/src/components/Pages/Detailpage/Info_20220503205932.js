import React, { useState } from "react";
import "./Info.scss";
const Info = ({ item }) => {
  const [tab, setTab] = useState(1);
  const handleClickTab = (index) => {
    setTab(index);
  };
  return (
    <div className="info">
      <div className="container">
        <div className="info-tab">
          <div
            className={`${tab ? "active-tabs" : "info-tab--title"}`}
            onClick={() => handleClickTab(1)}
          >
            Description
          </div>
          <div
            className={`${tab ? "active-tabs" : "info-tab--title"}`}
            onClick={() => handleClickTab(2)}
          >
            Review
          </div>
        </div>
        <div className="info-content">
          <div className="info-content--desc">{item.content}</div>
          <div className="info-content--review"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
