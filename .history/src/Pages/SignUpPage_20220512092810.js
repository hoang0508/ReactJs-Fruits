import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px 0;
  .signup-content {
    text-align: center;
    margin-bottom: 40px;
  }
  .signup-heading {
    font-size: 35px;
    margin-bottom: 15px;
  }
  .field {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px 0;
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
      <form className="form">
        <div className="field">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" className="input" placeholder="Enter your email" />
        </div>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
