import React from "react";
import { Route, Routes } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomePage from "../components/Pages/HomePage";

const RoutersConfig = () => {
  return (
    <Routes>
      <Route element={<Header />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route element={<Footer />}></Route>
    </Routes>
  );
};

export default RoutersConfig;
