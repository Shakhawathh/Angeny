import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Assets/logos/airbnb.png";
import img2 from "../../Assets/logos/uber.png";
import img3 from "../../Assets/logos/google.png";
import img4 from "../../Assets/logos/netflix.png";
import img5 from "../../Assets/logos/slack.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="lg:px-4 py-16 bg-base-100 border-b border-neutral bg-[#DAFCF9]">
      <p className="lg:text-4xl md:text-3xl  text-2xl uppercase font-sub font-bold text-center "></p>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.25": {
            slidesPerView: 2,
          },
          "@0.60": {
            slidesPerView: 4,
          },
          "@0.75": {
            slidesPerView: 4,
          },
          "@1.00": {
            slidesPerView: 4,
          },
          "@1.25": {
            slidesPerView: 4,
          },
          "@1.50": {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div className="mx-auto">
          <SwiperSlide>
            <img className="w-32" src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-32" src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-32" src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-32" src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-32" src={img5} />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
