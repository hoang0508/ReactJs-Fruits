import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  .loading {
    width: 50px;
    height: 50px;
    border: 4px solid ${(props) => props.theme.border};
    border-top: 4px solid transparent;
  }
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
