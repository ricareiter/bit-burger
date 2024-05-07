"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularBurgers = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <BurgerCard
            title="Veggie Delight Burger"
            image="/images/b1.png"
            reviews="6"
            price="$10.90"
          />
          <BurgerCard
            title="Classic Cheeseburger"
            image="/images/b2.png"
            reviews="8"
            price="$9.99"
          />
          <BurgerCard
            title="BBQ Bacon Burger"
            image="/images/b3.png"
            reviews="11"
            price="$10.99"
          />
          <BurgerCard
            title="Mushroom Swiss Burger"
            image="/images/b4.png"
            reviews="3"
            price="$11.49"
          />
          <BurgerCard
            title="Jalapeno Pepperjack Burger"
            image="/images/b5.png"
            reviews="9"
            price="$10.79"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b6.png"
            reviews="10"
            price="$9.49"
          />
          <BurgerCard
            title="Double Bacon Cheeseburger"
            image="/images/b7.png"
            reviews="15"
            price="$12.99"
          />
          <BurgerCard
            title="Hawaiian Teriyaki Burger"
            image="/images/b8.png"
            reviews="9"
            price="$11.99"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurgers;
