import React from "react";
import { Route, Routes } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Cartpage from "../components/Pages/Cartpage/Cartpage";
import Detailpage from "../components/Pages/Detailpage/Detailpage";
import HomePage from "../components/Pages/HomePage";
import Topdown from "../components/Topdown/Topdown";

const RoutersConfig = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Footer />
              <Topdown />
            </>
          }
        >
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/detail/:id" element={<Detailpage />}></Route>
          <Route path="/cart" element={<Cartpage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RoutersConfig;
