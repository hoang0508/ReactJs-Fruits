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
import { Autoplay, Pagination, Navigation } from "swiper";

const Product = ({ type, heading, swp }) => {
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
          {swp ? (
            <div className="product-list--swiper">
              <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {product?.drinks &&
                  product?.drinks.length > 0 &&
                  product?.drinks.slice(0, 8).map((item) => (
                    <SwiperSlide key={item.idDrink}>
                      <ProductItem item={item}></ProductItem>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ) : (
            <div className="product-list">
              {product?.drinks &&
                product?.drinks.length > 0 &&
                product?.drinks
                  .slice(0, 8)
                  .map((item) => (
                    <ProductItem key={item.idDrink} item={item}></ProductItem>
                  ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
