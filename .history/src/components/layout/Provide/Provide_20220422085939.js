import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const dataProvide = [
  {
    id: 1,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-1.png",
  },
  {
    id: 2,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-2.png",
  },
  {
    id: 3,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-3.png",
  },
  {
    id: 4,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-4.png",
  },
  {
    id: 5,
    image:
      "https://templates.envytheme.com/orgo/default/assets/img/partner/partner-5.png",
  },
];

const Provide = () => {
  return (
    <Swiper>
      {dataProvide &&
        dataProvide.length > 0 &&
        dataProvide.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Provide;
