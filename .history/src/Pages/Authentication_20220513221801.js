import React, { Children } from "react";
import styled from "styled-components";

const AuthenticationStyles = styled.div``;

const Authentication = ({ children }) => {
  return (
    <AuthenticationStyles>
      <div className="signup-content">
        <h3 className="signup-heading">Welcome back</h3>
        <span className="signup-desc">
          Welcome back! Please enter your home
        </span>
      </div>
      {children}
    </AuthenticationStyles>
  );
};

export default Authentication;
