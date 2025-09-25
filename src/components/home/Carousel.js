import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import CarouselCard from './CarouselCard';

export default function HomeCarousel() {

  const testimonials = [
  {
    title: "Amazing Hair Oil",
    rating: 5,
    description: "This product completely transformed my hair—softer, shinier, and healthier!",
    imgSrc: "https://i.pravatar.cc/150?img=10",
    name: "David Wilson",
    job: "Salon Owner",
  },
  {
    title: "Great Results!",
    rating: 4,
    description: "This product made my hair stronger and healthier—noticed results in just weeks!",
    imgSrc: "https://i.pravatar.cc/150?img=12",
    name: "James Anderson",
    job: "Beauty Blogger",
  },
  {
    title: "Highly Recommend",
    rating: 5,
    description: "I’ve tried many products, but this one gave me real volume and shine.",
    imgSrc: "https://i.pravatar.cc/150?img=3",
    name: "Michael Thompson",
    job: "Model",
  },
];

  return (
    <div className='ininiteCarousel-parent'>
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
       dots={true}
      // showSides={true}
      // sidesOpacity={.5}
      // sideSize={.1}
      // slidesToScroll={4}
        slidesToShow={1}
      // scrollOnDevice={true}
      >
        {testimonials.map((item, idx) => (
          <CarouselCard key={idx} {...item} />
        ))}
    </InfiniteCarousel>
    </div>
  )
}
