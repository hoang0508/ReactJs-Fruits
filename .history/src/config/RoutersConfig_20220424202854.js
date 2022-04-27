import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../components/Pages/HomePage";

const RoutersConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default RoutersConfig;
