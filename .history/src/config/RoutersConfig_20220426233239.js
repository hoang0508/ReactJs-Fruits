import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomePage from "../components/Pages/HomePage";

const RoutersConfig = () => {
  return (
    <Routes>
      <Route element={<Header />} />
      <Route>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
      {/* <Footer /> */}
    </Routes>
  );
};

export default RoutersConfig;
