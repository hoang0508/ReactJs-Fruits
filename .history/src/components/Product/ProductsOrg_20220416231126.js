import React from "react";
import { useHookAPI } from "../../hooks/useHookAPI";
import PageLine from "../PageLine";
import "./ProductOrg.scss";
const ProductsOrg = ({ heading }) => {
  const { value: product } = useHookAPI(
    `https://625ae83c398f3bc782a7f96e.mockapi.io/productsorg/productorg`
  );
  return (
    <>
      <PageLine heading={heading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
      <div className="productOrg">
        <div className="container">
          <div className="productOrg-list">
            {product &&
              product.length > 0 &&
              product.map((item) => (
                <div className="productOrg-item" key={item.id}>
                  <div className="productOrg-images">
                    <img src={item.images} alt="" />
                  </div>
                  <div className="productOrg-name">{item.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsOrg;
