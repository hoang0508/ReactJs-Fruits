import { Label } from "components/label";
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
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  .input {
    border: 1px solid ${(props) => props.theme.border};
    padding: 15px;
    border-radius: 4px;
    transition: all 0.25s linear;
    &:focus {
      border-color: ${(props) => props.theme.primary};
    }
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
          <Label htmlFor="email">Email address</Label>
          <input
            id="email"
            type="text"
            className="input"
            placeholder="Enter your email"
          />
        </div>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
