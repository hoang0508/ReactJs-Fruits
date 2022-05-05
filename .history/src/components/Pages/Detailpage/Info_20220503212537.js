import React, { useState } from "react";
import { useHookAPI } from "../../../hooks/useHookAPI";
import "./Info.scss";
const Info = ({ item }) => {
  const [tab, setTab] = useState(1);
  const handleClickTab = (index) => {
    setTab(index);
  };
  const { value: review } = useHookAPI(
    `https://6252eca769af39728b54c940.mockapi.io/fruits/v1/review`
  );
  return (
    <div className="info">
      <div className="container">
        <div className="info-tab">
          <div
            className={`${
              tab === 1 ? " info-tab--title active-tabs" : "info-tab--title"
            }`}
            onClick={() => handleClickTab(1)}
          >
            Description
          </div>
          <div
            className={`${
              tab === 2 ? "info-tab--title active-tabs" : "info-tab--title"
            }`}
            onClick={() => handleClickTab(2)}
          >
            Review
          </div>
        </div>
        <div className="info-content">
          <div
            className={`${
              tab === 1
                ? "info-content--desc active-content"
                : "info-content--desc"
            }`}
          >
            {item.content}
          </div>
          <div
            className={`${
              tab === 2
                ? "info-content--review active-content"
                : "info-content--review"
            }`}
          >
            <h3 className="info-customer__review">Customer Review</h3>
            <div className="info-customer__list">
              {review &&
                review.length > 0 &&
                review.map((item) => (
                  <div className="info-customer__item" key={item.id}>
                    <div className="info-customer__image">
                      <img src={item.avatar} alt="" />
                      <h3 className="info-customer__name">{item.name}</h3>
                    </div>
                    <div className="info-customer__date">
                      {new Date(item.createdAt)}
                    </div>
                    <div className="info-customer__desc">{item.content}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
