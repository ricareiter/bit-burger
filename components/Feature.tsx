import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import FeaturedBurger from "./FeaturedBurger";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        burgers made with <br /> love and
        <span className="text-red-600"> care</span>
      </h1>
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        <FeaturedBurger
          imgSrc={Img1}
          burgerTitle="Our Burger"
          burgerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat
          et ullam nisi in voluptatibus vel aperiam ipsa molestiae molestias."
        />
        <FeaturedBurger
          imgSrc={Img2}
          burgerTitle="Your Opinion is Important"
          burgerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat
          et ullam nisi in voluptatibus vel aperiam ipsa molestiae molestias."
          extraClass="lg:translate-y-[3rem]"
        />
        <FeaturedBurger
          imgSrc={Img3}
          burgerTitle="Chicken Burgers"
          burgerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat
          et ullam nisi in voluptatibus vel aperiam ipsa molestiae molestias."
        />
      </div>
    </div>
  );
};

export default Feature;
