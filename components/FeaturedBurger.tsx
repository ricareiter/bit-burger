import Image, { StaticImageData } from "next/image";

interface Props {
  imgSrc: StaticImageData;
  burgerTitle: string;
  burgerDescription: string;
  extraClass?: string;
  animation: string;
}

const FeaturedBurger = ({
  imgSrc,
  burgerTitle,
  burgerDescription,
  extraClass,
  animation,
}: Props) => {
  return (
    <div className={animation}>
      <div
        className={`p-6 hover:bg-white ${extraClass} rounded-lg transition-all duration-200`}
      >
        <Image src={imgSrc} alt="burger image" className="rounded-3xl" />
        <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
          {burgerTitle}
        </h1>
        <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
          {burgerDescription}
        </p>
      </div>
    </div>
  );
};

export default FeaturedBurger;
