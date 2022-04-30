import React from "react";
import { Route, Routes } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Detailpage from "../components/Pages/Detailpage/Detailpage";
import HomePage from "../components/Pages/HomePage";

const RoutersConfig = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail:id" element={<Detailpage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RoutersConfig;
