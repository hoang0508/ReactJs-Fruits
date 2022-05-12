import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: 100%;
  display: block;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height}; ;
`;
const Button = ({ children, className = "", maxWidth = "", height = "" }) => {
  return (
    <ButtonStyles maxWidth={maxWidth} height={height} className={className}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
