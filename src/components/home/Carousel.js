import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import CarouselCard from './CarouselCard';

export default function HomeCarousel() {
  return (
    <InfiniteCarousel   
    // breakpoints={[
      //   {
      //     breakpoint: 500,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //     },
      //   },
      // ]}
      // dots={true}
      // showSides={true}
      // sidesOpacity={.5}
      // sideSize={.1}
      // slidesToScroll={4}
        slidesToShow={1}
      // scrollOnDevice={true}
      >
        <CarouselCard/>
        <CarouselCard/>
        <CarouselCard/>
    </InfiniteCarousel>
  )
}
