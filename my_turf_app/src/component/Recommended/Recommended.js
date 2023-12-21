import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Recommended.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RecommendedDataList } from './RecommendedDataList';
import RecommendedCard from './RecommendedCard';

export default function Recommended() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [dataDetail, setDataDetail] = useState(RecommendedDataList.Data);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    let handleStyle = {
        borderRadius: "1rem",
        width: "95%",
        height: "20vh"

    }
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
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    dataDetail.map((data) => {
                        return (
                            <SwiperSlide style={handleStyle}>
                                <RecommendedCard image={data.image} />
                            </SwiperSlide>
                        )
                    })
                }

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
