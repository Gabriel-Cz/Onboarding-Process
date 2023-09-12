"use client"

import React from 'react';
import { NextPage } from "next";
import { Slide, Card, Button } from "@/components";
import useOnboarding from "@/hooks/useOnboarding";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface IndexProps {};

const Index: NextPage<IndexProps> = () => {
  const { data } = useOnboarding();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='flex max-w-[950px] max-h-[555px] w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[50%] self-center justify-center items-center justify-items-center'>
        <Card>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            style={{ paddingBottom: 100, zIndex: 50 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <Slide
                title={data["GET STARTED"].title}
                description={data["GET STARTED"].description}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title={data["VISIT PAGE"].title}
                description={data["VISIT PAGE"].description}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title={data["ACTION"].title}
                description={data["ACTION"].description}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                title={data["END"].title}
                description={data["END"].description}
              />
            </SwiperSlide>
          </Swiper>
          <div className='flex gap-5 items-end justify-end mt-7'>
            <Button variant='secondary'>
              GO BACK
            </Button>
            <Button>
              CONTINUE
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Index;