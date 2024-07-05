"use client";
import React, { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { useGetAllByUrlQuery } from '../../../api/api.service';
import { getItems } from '../../../utils/getItems';

export default function HeroSlider() {
    const { data: sliders } = useGetAllByUrlQuery('sliders')
    const items = getItems(sliders)
    console.log(items);

    const swiperRef = useRef(null);
    const [buttonState, setButtonState] = useState("next");
    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        setButtonState("prev");
        swiperRef.current?.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        setButtonState("next");
        swiperRef.current?.swiper.slideNext();
    }, []);



    return (
        <>
            <Swiper
                ref={swiperRef}
                pagination={{
                    clickable: true,
                }}
                className="heroSwiper"
                breakpoints={{
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                        centeredSlides: false
                    },
                    992: {
                        slidesPerView: 3.6,
                        spaceBetween: 20,
                        centeredSlides: false
                    },
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        centeredSlides: true
                    }
                }}
                loop
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <button className='main-button' onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
            </Swiper>
        </>
    );
}
