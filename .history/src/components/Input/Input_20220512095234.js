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
  return <InputStyles></InputStyles>;
};

export default Input;
