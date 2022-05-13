import React, { useState } from "react";
import Authentication from "./Authentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Field } from "components/Field";
import { Label } from "components/label";
import { Input } from "components/Input";
import { IconClose, IconOpen } from "components/icon";
import { Button } from "components/button";

// Validation Yup
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullName"),
  email: yup
    .string()
    .required("Please enter your address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 character or greater"),
});

const SignInPage = () => {
  // React hook form
  const {
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignIn = () => {};
  // TogglePassowd
  const [togglePassword, setTogglePassWord] = useState(false);
  const handleTogglePassowd = () => {
    setTogglePassWord(!togglePassword);
  };
  return (
    <Authentication>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
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
          Sign In
        </Button>
      </form>
    </Authentication>
  );
};

export default SignInPage;
