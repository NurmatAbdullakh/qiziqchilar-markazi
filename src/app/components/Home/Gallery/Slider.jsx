import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs, Keyboard } from 'swiper/modules';
import { getImageUrl } from '../../../../utils/getImageUrl';

export default function App({ items }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Keyboard]}
                keyboard={{ enabled: true }}
                className="mySwiper2"
            >
                {items.map((item, index) => (
                    <SwiperSlide style={{ maxHeight: "500px", maxWidth: "800px", marginBottom: "10px" }} key={index}>
                        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={getImageUrl(item)} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Keyboard]}
                keyboard={{ enabled: true }}
                className="mySwiper"
            >
                {items.map((item, index) => (
                    <SwiperSlide style={{ maxHeight: "100px", maxWidth: "60px", marginBottom: "10px" }} key={index}>
                        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={getImageUrl(item)} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
