import React, { useEffect, useState } from "react";
import Authentication from "./Authentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Field } from "components/Field";
import { Label } from "components/label";
import { Input } from "components/Input";
import { IconClose, IconOpen } from "components/icon";
import { Button } from "components/button";
import { toast } from "react-toastify";
import { useAuthContext } from "components/context/Auth-Context";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "Firebase-app/Firebase-config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "Firebase-app";
// import "firebase/compat/auth";

// Validation Yup
const schema = yup.object({
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 character or greater"),
});

const SignInPage = () => {
  // context
  const { userInfo } = useAuthContext();
  console.log(
    "🚀 ~ file: SignInPage.js ~ line 29 ~ SignInPage ~ userInfo",
    userInfo
  );
  // Navigate
  const navigate = useNavigate();
  // React hook form
  const {
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    document.title = "Sign In Page";
  }, []);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
    //
    toast.success("SignIn Successfully!!!");
  };
  // Google
  // Configure FirebaseUI.
  const uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  // error, toastify
  useEffect(() => {
    const arrError = Object.values(errors);
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message);
    }
  }, [errors]);
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
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </form>
    </Authentication>
  );
};

export default SignInPage;
