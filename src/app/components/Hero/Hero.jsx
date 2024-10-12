"use client";
import { Link } from "../../../navigation";
import { useState, useRef, useEffect } from "react";
import { Box, Img, Text } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useGetAllByUrlQuery } from "../../../api/api.service";
import { getItems } from "../../../utils/getItems";
import { getImageUrl } from "../../../utils/getImageUrl";
import { useParams } from "next/navigation";

const Hero = () => {
    const { locale } = useParams()
    const [currentData, setCurrentData] = useState(null);
    const { data: sliders } = useGetAllByUrlQuery('sliders');
    const items = getItems(sliders);

    const swiperRef = useRef(null);

    // Function to update currentData based on active index
    const updateCurrentData = () => {
        if (swiperRef.current) {
            const activeIndex = swiperRef.current.swiper.realIndex; // Get the active index
            setCurrentData(items?.[activeIndex]);
        }
    };

    const NavButtons = () => {
        const swiper = useSwiper();

        const handlePrev = () => {
            if (swiperRef.current) {
                swiper.slidePrev();
                updateCurrentData();
            }
        };

        const handleNext = () => {
            if (swiperRef.current) {
                swiper.slideNext();
                updateCurrentData();
            }
        };

        useEffect(() => {
            if (swiperRef.current) {

                swiper.slidePrev();
            }
        }, []);



        return (
            <div className="swiper__buttons">
                <button className='main-button' onClick={handlePrev}>
                    <img src="/icons/navArrowLeft.svg" alt="left" />
                </button>
                <button onClick={handleNext}>
                    <img src="/icons/navArrowRight.svg" alt="right" />
                </button>
            </div>
        );
    };

    return (
        <section className="hero">
            <img className="hero__bg bg" src="/images/hero.jpg" alt="banner" />
            <img
                className="hero__overlay bg"
                src="/images/Overlay.png"
                alt=""
            />
            <div className="hero__container container">
                <div className="hero__box">
                    <div className="hero__adress">{currentData?.[`address_${locale}`]}</div>
                    <div className="hero__title">{currentData?.[`title_${locale}`]}</div>
                    <div className="hero__subtitle">{currentData?.[`text_${locale}`]}</div>
                    <Link href={currentData?.Link || ""} className="hero__button">Batafsil</Link>
                    <Swiper
                        ref={swiperRef}
                        pagination={{
                            clickable: true,
                        }}
                        className="heroSwiper"
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                centeredSlides: false
                            },
                            992: {
                                slidesPerView: 4,
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
                        onSwiper={(swiper) => {
                            // Update currentData initially
                            setCurrentData(items?.[swiper.realIndex]);
                        }}
                        onSlideChange={() => {
                            // Update currentData on slide change if needed
                            updateCurrentData();
                        }}
                    >
                        {items?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Box boxSize={'full'}>
                                    <Img pos={"absolute"} boxSize={"full"} top={0} left={0} src={getImageUrl(item)} alt="slider" />
                                    <Img pos={"absolute"} boxSize={"full"} top={0} left={0} src="/images/Overlay.png" className='overlay' transform={"rotate(180deg)"} alt="overlay" />
                                    <Box pos={"absolute"} bottom={0} left={0} p={4}>
                                        <Text className='title' color={"white"} mb={2} fontWeight={700} fontSize={"md"}>{item?.[`title_${locale}`]}</Text>
                                        <Text className='subtitle' textAlign={"left"} color={"#9C9C9F"} fontWeight={500} fontSize={"md"}>{item.updatedAt?.slice(0, 10)}</Text>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                        <NavButtons />
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hero;
