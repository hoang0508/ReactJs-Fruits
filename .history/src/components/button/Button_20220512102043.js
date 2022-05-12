import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  max-width: ${(props) => props.maxWidth};
`;
const Button = ({ chilren, className = "", maxWidth = "" }) => {
  return (
    <ButtonStyles maxWidth={maxWidth} className={className}>
      {chilren}
    </ButtonStyles>
  );
};

export default Button;
