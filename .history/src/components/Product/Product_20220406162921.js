import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import "./Product.scss";
import axios from "axios";
const Product = ({ type }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${type}`
      );
      setProduct(reponse?.data.drinks);
    };
    fetchData();
  }, [type]);
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product-heading page-center">
            <h3 className="page-heading">Trending Products</h3>
            <h3 className="page-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse
            </h3>
          </div>
          <div className="product-list">
            {product &&
              product.length > 0 &&
              product
                .slice(0, 8)
                .map((item) => (
                  <ProductItem key={item.idDrink} item={item}></ProductItem>
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
