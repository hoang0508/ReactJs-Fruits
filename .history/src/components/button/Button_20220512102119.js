import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  max-width: ${(props) => props.maxWidth};
`;
const Button = ({ children, className = "", maxWidth = "" }) => {
  return (
    <ButtonStyles maxWidth={maxWidth} className={className}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
