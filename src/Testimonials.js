import React from 'react';
import "./Testimonials.css";
import { Test } from "./Test";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">People say</h2>
        <span className="section__subtitle">My personal journey</span>
    
    <Swiper className="testimonial__container"
      spaceBetween={24}
      //slidesPerView={3}
      grabCursor={true}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 46,
        },
      }}
      modules={[Pagination]}
    >
      {Test.map(({ id, image, title, description }) => {
        return (
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt="" 
              className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </section>
  )
}

export default Testimonials
