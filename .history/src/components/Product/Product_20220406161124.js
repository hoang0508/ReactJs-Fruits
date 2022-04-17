import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import "./Product.scss";
import axios from "axios";
const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=apple`
      );
      setProduct(reponse?.data.drinks);
    };
    fetchData();
  }, []);
  return (
    <>
      {product &&
        product.length > 0 &&
        product
          .slice(0, 12)
          .map((item) => <ProductItem key={item.id}></ProductItem>)}
    </>
  );
};

export default Product;
