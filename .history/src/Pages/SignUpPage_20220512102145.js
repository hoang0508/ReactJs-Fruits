import { Button } from "components/button";
import { Field } from "components/Field";
import { Input } from "components/Input";
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
        <Field>
          <Label htmlFor="name">Fullname</Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Enter your fullname"
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input name="email" type="text" placeholder="Enter your email" />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="text"
            placeholder="Enter your password"
          />
        </Field>
        <Button maxWidth="200px" className="button button--primary">
          Sign Up
        </Button>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
