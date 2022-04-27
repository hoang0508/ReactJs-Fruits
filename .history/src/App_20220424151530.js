import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/HomePage";

import "./index.scss";
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Header />
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
