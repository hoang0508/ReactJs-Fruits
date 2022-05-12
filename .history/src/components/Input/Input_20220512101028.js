import React from "react";
import styled from "styled-components";

const InputStyles = styled.div`
  width: 100%;
  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme.border};
    padding: 15px;
    border-radius: 4px;
    transition: all 0.25s linear;
    &:focus {
      background-color: ${(props) => props.theme.bgColor};
      border-color: ${(props) => props.theme.primary};
    }
  }
`;

const Input = ({
  name = "",
  placeholder = "",
  type = "",
  children,
  ...props
}) => {
  return (
    <InputStyles>
      <input type={type} placeholder={placeholder} id={name} {...props} />
    </InputStyles>
  );
};

export default Input;
