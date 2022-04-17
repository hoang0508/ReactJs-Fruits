import React from "react";
import ProductItem from "./ProductItem";
import "./Product.scss";
import PageLine from "../PageLine";
import { useHookAPI } from "../../hooks/useHookAPI";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";
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
          {/* <div className="product-list"> */}
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {product?.drinks &&
              product?.drinks.length > 0 &&
              product?.drinks.map((item) => (
                <SwiperSlide>
                  <ProductItem key={item.idDrink} item={item}></ProductItem>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Product;
