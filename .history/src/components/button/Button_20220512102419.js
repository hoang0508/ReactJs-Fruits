import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height}; ;
`;
const Button = ({
  type = "",
  children,
  className = "",
  maxWidth = "",
  height = "",
}) => {
  return (
    <ButtonStyles
      type={type}
      maxWidth={maxWidth}
      height={height}
      className={className}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
