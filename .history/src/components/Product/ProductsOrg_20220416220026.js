import React from "react";
import PageLine from "../PageLine";
import "./ProductOrg.scss";
const ProductsOrg = ({ heading }) => {
  return (
    <>
      <PageLine heading={heading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua quis ipsum
        suspendisse
      </PageLine>
      <div className="productOrg">
        <div className="productOrg-list">
          <div className="productOrg-item">
            <div className="productOrg-images">
              <img
                src="https://media.istockphoto.com/photos/fresh-vegetables-green-salad-peppers-mushrooms-and-eggplant-on-the-picture-id1323280570?b=1&k=20&m=1323280570&s=170667a&w=0&h=St7njKkpbKu1Ru6yCyjj8eBnhKEg-PdrzquRsLlsZSU="
                alt=""
              />
            </div>
            <div className="productOrg-name">Fresh Milk</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsOrg;
