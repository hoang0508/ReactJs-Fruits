import NotFoundPage from "Pages/NotFoundPage.js";
import React from "react";
import { Route, Routes } from "react-router";
import { ImageProvider } from "../components/context/Auth-Context.js";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Topdown from "../components/Topdown/Topdown";
import Cartpage from "../Pages/Cartpage/Cartpage.js";
import Detailpage from "../Pages/Detailpage/Detailpage.js";
import HomePage from "../Pages/HomePage.js";

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
          <Route
            path="/cart"
            element={
              <>
                <ImageProvider>
                  <Cartpage />
                </ImageProvider>
              </>
            }
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RoutersConfig;
