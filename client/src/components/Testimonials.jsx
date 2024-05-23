import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialCard from './TestimonialCard';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useSelector } from 'react-redux';

function Testimonials() {
  const [slidesData, setSlidesData] = useState("");
  const reviews = useSelector((state) => state.reviews.reviews);

  useEffect(() => {
    if (reviews)
      setSlidesData(reviews);
  }, [reviews]);

  return (
    <div className="my-8 bg-gray-50 py-12">
      <h1 className="font-bold md:text-3xl text-2xl text-center text-gray-800 py-7">What Our Clients Say</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        breakpoints={{
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData && slidesData.map((data, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              name={data.user.name}
              img="https://tse2.mm.bing.net/th?id=OIP.rMWHLs1fJ9nlbiv9CAgsqAHaHa&pid=Api&P=0"
              rating={data.rating}
              reviewText={data.message}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
