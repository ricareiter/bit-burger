"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import deliveryImg from "@/public/images/delivery.svg";
import DeliveryPerk from "./DeliveryPerk";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {isVisible && (
          <div className="animate-slideinslow">
            <Image src={deliveryImg} alt="delivery" />
          </div>
        )}
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] uppercase font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-red-600">Favorite Burger </span> On The
            Way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, iure autem minus distinctio dolores illo aperiam cumque
            quidem, numquam rerum hic odit? Dolor ipsum minus impedit quod
            accusantium officiis harum?
          </p>
          <DeliveryPerk
            text="Delivery in 30 minutes"
            icon={<RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />}
          />
          <DeliveryPerk
            text="Free shipping from $75"
            changeClass="mt-[1rem]"
            icon={<IoFastFood className="w-[2rem] h-[2rem] text-red-600" />}
          />
          <DeliveryPerk
            text="Delivery on your doorstep"
            changeClass="mt-[1rem]"
            icon={<BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
