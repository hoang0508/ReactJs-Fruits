import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label``;

const Label = ({ htmlFor = "", children, ...props }) => {
  return <LabelStyles htmlFor={htmlFor}>{children}</LabelStyles>;
};

export default Label;
