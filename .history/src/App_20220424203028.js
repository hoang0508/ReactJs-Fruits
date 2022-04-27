import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/HomePage";
import RoutersConfig from "./config/RoutersConfig";

import "./index.scss";
function App() {
  return (
    <>
      <Header />
      <RoutersConfig />
    </>
  );
}

export default App;
