import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

interface SwiperBoardProps {
  children: React.ReactNode;
}

export const SwiperBoard: React.FC<SwiperBoardProps> = ({ children }) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {children}
    </Swiper>
  );
}