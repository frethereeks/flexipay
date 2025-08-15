import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"


export default function AppSlider({slides}) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                direction='horizontal'
                modules={[Autoplay]}
                className='w-full h-full justify-center items-stretch'
            >
                {
                    slides.map(el => (
                        <SwiperSlide key={Math.random(6).toString().slice(4, 8)} className='relative w-full h-full'>
                            <img src={el} alt={el} className="absolute top-0 left-0 w-full h-full object-cover" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
