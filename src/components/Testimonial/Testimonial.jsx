import React from "react";
import "./Testimonial.css";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import AVT1 from "../../assets/image/women_testimonials.jpg";
import AVT2 from "../../assets/image/girl_testimonials.jpg";
import AVT3 from "../../assets/image/men_testimonials.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "asui",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sit magni similique delectus, exercitationem omnis qui expedita repudiandae quis dolor, deleniti debitis asperiores, distinctio libero amet quas iste? Quos, fugiat!",
  },
  {
    avatar: AVT2,
    name: "wantuk",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sit magni similique delectus, exercitationem omnis qui expedita repudiandae quis dolor, deleniti debitis asperiores, distinctio libero amet quas iste? Quos, fugiat!",
  },
  {
    avatar: AVT3,
    name: "Tina dong",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sit magni similique delectus, exercitationem omnis qui expedita repudiandae quis dolor, deleniti debitis asperiores, distinctio libero amet quas iste? Quos, fugiat!",
  },
  {
    avatar: AVT2,
    name: "Tina dong",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sit magni similique delectus, exercitationem omnis qui expedita repudiandae quis dolor, deleniti debitis asperiores, distinctio libero amet quas iste? Quos, fugiat!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div
        className="container testimonials__container" // install Swiper modules
        // modules={[Pagination]}
        // slidesPerView={2}
        // pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
