"use client";
import { Box, Img, Text } from '@chakra-ui/react';
import { useCallback, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetAllByUrlQuery } from '../../../api/api.service';
import { getImageUrl } from '../../../utils/getImageUrl';
import { getItems } from '../../../utils/getItems';

export default function HeroSlider({ onChange }) {
    const { data: sliders } = useGetAllByUrlQuery('sliders')
    const items = getItems(sliders)

    const swiperRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current?.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current?.swiper.slideNext();
    }, []);


    return (
        <>
            <Swiper
                onSlideChange={() => onChange(items?.[swiperRef.current.swiper.activeIndex])}
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
                {
                    items?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box boxSize={'full'}>
                                <Img pos={"absolute"} boxSize={"full"} top={0} left={0} src={getImageUrl(item)} alt="slider" />
                                <Img pos={"absolute"} boxSize={"full"} top={0} left={0} src={"/images/overlay.png"} className='overlay' transform={"rotate(180deg)"} alt="overlay" />
                                <Box pos={"absolute"} bottom={0} left={0} p={4}>
                                    <Text className='title' color={"white"} mb={2} fontWeight={700} fontSize={"md"}>{item.title_uz}</Text>
                                    <Text className='subtitle' textAlign={"left"} color={"#9C9C9F"} fontWeight={500} fontSize={"md"}>{item.updatedAt?.slice(0, 10)}</Text>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))
                }
                <div className="swiper__buttons">
                    <button className='main-button' onClick={handlePrev}>
                        <img src="/icons/navArrowLeft.svg" alt="left" />
                    </button>
                    <button onClick={handleNext}>
                        <img src="/icons/navArrowRight.svg" alt="right" />
                    </button>
                </div>
            </Swiper >
        </>
    );
}
