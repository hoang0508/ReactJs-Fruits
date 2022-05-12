import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button``;
const Button = ({ chilren, className = "" }) => {
  return <ButtonStyles className={className}>{chilren}</ButtonStyles>;
};

export default Button;
