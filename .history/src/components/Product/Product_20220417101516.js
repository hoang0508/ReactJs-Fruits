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

const Product = ({ heading, swp, f }) => {
  const { value: product } = useHookAPI(`
    https://6252eca769af39728b54c940.mockapi.io/fruits/v1/products`);
  let trend, feature;
  let start,
    end = 0;
  switch (f) {
    case trend:
      start = 0;
      end = 8;
      break;
    case feature:
      start = 9;
      end = 16;
      break;
    default:
      break;
  }
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
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {product &&
                  product.length > 0 &&
                  product.slice(0, 12).map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProductItem item={item}></ProductItem>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ) : (
            <div className="product-list">
              {product &&
                product.length > 0 &&
                product
                  .slice(`${f ? `${start}` : `${end}`}`)
                  .map((item) => (
                    <ProductItem key={item.id} item={item}></ProductItem>
                  ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
