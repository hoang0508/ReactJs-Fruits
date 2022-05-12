import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .signup-content {
    text-align: center;
    margin-bottom: 40px;
  }
  .signup-heading {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="signup-content">
        <h3 className="signup-heading">Welcome back</h3>
        <span className="signup-desc">
          Welcome back! Please enter your home
        </span>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
