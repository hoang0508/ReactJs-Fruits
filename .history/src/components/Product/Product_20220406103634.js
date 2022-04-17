import React from "react";
import ProductItem from "./ProductItem";
import "./Product.scss";
import axios from "axios";
const Product = () => {
  const options = {
    method: "POST",
    url: "https://food-categories-recognition.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Host": "food-categories-recognition.p.rapidapi.com",
      "X-RapidAPI-Key": "626dc90fdemshb100371e82fe861p19d880jsn8b556cdcd5f0",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <>
      <ProductItem></ProductItem>
    </>
  );
};

export default Product;
