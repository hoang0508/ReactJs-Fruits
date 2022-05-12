import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div``;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div>
        <h3 className="signup-heading">Welcome back</h3>
        <span className="signup-desc">
          Welcome back! Please enter your details
        </span>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
