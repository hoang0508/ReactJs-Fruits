import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../components/Pages/HomePage";

const Routers = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default Routers;
