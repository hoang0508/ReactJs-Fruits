import React from "react";
import styled from "styled-components";

const InputStyles = styled.div``;

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
