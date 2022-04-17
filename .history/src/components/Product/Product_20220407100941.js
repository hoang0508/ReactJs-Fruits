import React from "react";
import ProductItem from "./ProductItem";
import "./Product.scss";
import PageLine from "../PageLine";
import { useHookAPI } from "../../hooks/useHookAPI";
const Product = ({ type, heading }) => {
  const { value: product } = useHookAPI(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${type}`
  );
  return (
    <>
      <section className="product">
        <div className="container">
          <PageLine heading={heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse
          </PageLine>
          <div className="product-list">
            {product?.drinks &&
              product?.drinks.length > 0 &&
              product?.drinks.map((item) => (
                <ProductItem key={item.idDrink} item={item}></ProductItem>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
