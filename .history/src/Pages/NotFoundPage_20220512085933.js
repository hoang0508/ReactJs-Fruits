import React from "react";
import styled from "styled-components";

const NotFoundPageStyles = styled.div``;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <span className="icon-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </span>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
