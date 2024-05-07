"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImg1 from "@/public/images/b1.png";
import BurgerImg2 from "@/public/images/b2.png";
import CarouselItem from "./CarouselItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      <CarouselItem
        imgSrc={BurgerImg1}
        burgerTitle="Fast Food Burger"
        burgerDescription="Best"
        bgColor="bg-blue-950"
        btnColor="bg-green-500"
      />
      <CarouselItem
        imgSrc={BurgerImg2}
        burgerTitle="Tasty Burger"
        burgerDescription="Top"
        bgColor="bg-red-950"
        btnColor="bg-blue-500"
      />
    </Carousel>
  );
};

export default Hero;
