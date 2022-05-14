import NotFoundPage from "Pages/NotFoundPage.js";
import SignInPage from "Pages/SignInPage.js";
import SignUpPage from "Pages/SignUpPage.js";
import React from "react";
import { Route, Routes } from "react-router";
import { AuthProvider } from "../components/context/Auth-Context.js";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Topdown from "../components/Topdown/Topdown";
import Cartpage from "../Pages/Cartpage/Cartpage.js";
import Detailpage from "../Pages/Detailpage/Detailpage.js";
import HomePage from "../Pages/HomePage.js";

const RoutersConfig = () => {
  return (
    <AuthProvider>
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
                <AuthProvider>
                  <Cartpage />
                </AuthProvider>
              </>
            }
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </AuthProvider>
  );
};

export default RoutersConfig;
