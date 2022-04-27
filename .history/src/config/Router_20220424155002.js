import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../components/Pages/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
