import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import "./index.scss";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Product type="long" />
    </>
  );
}

export default App;
