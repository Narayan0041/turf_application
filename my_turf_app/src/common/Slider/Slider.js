import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SliderImage from './SliderImage';
import { heroSectionSlider } from './SliderImageDataList';

export default function Slider() {
  // let handleStyle={
  //   // borderRadius: "1rem",
  //   // width: "95%",
  //   // height:"31vh",
  //   paddingBottom:"5rem",
  //   marginBottom:"25rem",
  // }
  let image = heroSectionSlider;
  return (
    <>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {heroSectionSlider.map((item, index) =>{
        return(
          // Use heroSectionSlider directly
           <SwiperSlide key={index}>
             <SliderImage
               image={item.image}
               firstWord={item.firstWord}
               secondWord={item.LastWord} // Correct case 'LastWord' to 'lastWord' if needed
             />
           </SwiperSlide>
        )
        } 
        )}
      </Swiper>
    </>
  );
}
