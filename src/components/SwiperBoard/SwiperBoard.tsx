import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
interface SwiperBoardProps {
  children: React.ReactNode;
}

export const SwiperBoard: React.FC<SwiperBoardProps> = ({ children }) => {
  return (
    <div className='w-[50%]'>
      <Swiper
      // install Swiper modules
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        style={{ width: '50%', height: '50vh', margin: 0 }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {children}
        <SwiperSlide>
          <div className='w-[500px] h-[500px]'>
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[500px] h-[500px]'>
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[500px] h-[500px] b-'>
            slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[500px] h-[500px]'>
            slide 4
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}