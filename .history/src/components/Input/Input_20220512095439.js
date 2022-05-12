import React from "react";
import styled from "styled-components";

const InputStyles = styled.div`
  input {
    border: 1px solid ${(props) => props.theme.border};
    padding: 15px;
    border-radius: 4px;
    transition: all 0.25s linear;
    &:focus {
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
