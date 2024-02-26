import React from "react";
import "./Cards_landing.css";
import card from "../Assets/card.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";

export default function Cards_landing() {
  return (
    <div className="main_cardss_page">
      <div className="container">
        <h1 className="main_them_heading">Theme Campaign</h1>
        <div className="row  mt-4 justify-content-center">
          <div className="col-md-10">
            <div className="main_bg_card">
              {" "}
              <>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="slider_imges">
                    <h1 className="slider_heaaif">hela logo spogy here</h1>
                    <p className="slider_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque est vel iusto! Pos</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider_imges bg_img">
                    <h1 className="slider_heaaif">hela logo spogy here</h1>
                    <p className="slider_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque est vel iusto! Pos</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider_imges bg_img1">
                    <h1 className="slider_heaaif">hela logo spogy here</h1>
                    <p className="slider_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque est vel iusto! Pos</p>
                    </div>
                  </SwiperSlide>
                
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
