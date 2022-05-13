import { Button } from "components/button";
import { Field } from "components/Field";
import { IconClose, IconOpen } from "components/icon";
import { Input } from "components/Input";
import { Label } from "components/label";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
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

// Validation Yup
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullName"),
  email: yup
    .string()
    .required("Please enter your address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 character or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  // React hook form
  const {
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = (values) => {
    if (!isValid) return;
    console.log(values);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
  };
  // error, toastify
  useEffect(() => {
    const arrError = Object.values(errors);
    console.log(arrError.message[0]);
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // TogglePassowd
  const [togglePassword, setTogglePassWord] = useState(false);
  const handleTogglePassowd = () => {
    setTogglePassWord(!togglePassword);
  };
  console.log(errors);
  return (
    <SignUpPageStyles>
      <div className="signup-content">
        <h3 className="signup-heading">Welcome back</h3>
        <span className="signup-desc">
          Welcome back! Please enter your home
        </span>
      </div>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="name">Fullname</Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type={!togglePassword ? "password" : "text"}
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconClose onClick={handleTogglePassowd}></IconClose>
            ) : (
              <IconOpen onClick={handleTogglePassowd}></IconOpen>
            )}
          </Input>
        </Field>
        <Button
          type={"submit"}
          maxWidth="200px"
          height="56px"
          className="button button--primary"
          isLoading={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
