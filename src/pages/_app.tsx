"use client"

import '@/globals.css';
import { AppProps } from 'next/app';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function App({ Component, pageProps }: AppProps) {
  // const { lang } = useLang();
  const customProps = {
    ...pageProps,
    // lang
  }
  return (
    <>
      <Component {...customProps} />
    </>
  );
}