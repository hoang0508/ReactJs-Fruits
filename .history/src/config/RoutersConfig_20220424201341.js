import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../components/Pages/HomePage";

const RoutersConfig = () => {
  return <Route path="/" element={<HomePage />}></Route>;
};

export default RoutersConfig;
