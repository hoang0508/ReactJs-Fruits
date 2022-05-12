import React from "react";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .icon-down {
    width: 50px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 20px;
    animation: icon 0.5s infinite linear;
    @keyframes icon {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(50%);
      }
      100% {
        transform: translateY(100%);
      }
    }
  }
  .heading {
    font-size: 40px;
    font-weight: 600;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <span className="icon-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </span>
      <span className="heading">Oops! Page not found </span>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
