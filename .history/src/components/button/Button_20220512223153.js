import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
`;
const Button = ({
  type = "",
  children,
  className = "",
  maxWidth = "",
  height = "",
  ...props
}) => {
  const { isLoading } = props;
  return (
    <ButtonStyles
      type={type}
      maxWidth={maxWidth}
      height={height}
      className={className}
    >
      {isLoading ? <div className="loading"></div> : children}
    </ButtonStyles>
  );
};

export default Button;
