import Image, { StaticImageData } from "next/image";
import { BiCycling } from "react-icons/bi";

interface Props {
  imgSrc: StaticImageData;
  burgerTitle: string;
  burgerDescription: string;
  bgColor: string;
  btnColor: string;
}

const CarouselItem = ({
  imgSrc,
  burgerTitle,
  burgerDescription,
  bgColor,
  btnColor,
}: Props) => {
  return (
    <div
      className={`w-[100%] h-[88vh] flex items-center justify-center flex-col ${bgColor} md:clip_path`}
    >
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
        <Image src={imgSrc} alt="burger" priority className="hidden md:block" />
        <div>
          <h1 className="text-[40px] font-semibold text-yellow-400">
            {burgerTitle}
          </h1>
          <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
            {burgerDescription}
            <br />
            Burgers
          </h1>
          <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nemo
            consectetur. Eveniet perspiciatis sunt reprehenderit pariatur
            laboriosam cum, labore earum placeat, magnam, nisi atque
            dignissimos?
          </p>
          <button
            className={`px-8 py-3 mt-[2rem] text-[16px] ${btnColor} transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white`}
          >
            <span>
              <BiCycling className="w-[1.7rem] h-[1.7rem]" />
            </span>
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
