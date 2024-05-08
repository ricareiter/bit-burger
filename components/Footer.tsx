import { FaBurger } from "react-icons/fa6";
import FooterLink from "./FooterLink";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        <div>
          <div className="flex items-center space-x-2 text-white">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">
              BitBurger
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            temporibus cum rem alias iure.
          </p>
          <p className="mt-[1rem] text-white">support@example.com</p>
          <p className="text-red-300 text-[19px] font-bold">(123) 45678</p>
        </div>
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Products
          </h1>
          <FooterLink>Beefy Bite</FooterLink>
          <FooterLink>Veggie Delight Burger</FooterLink>
          <FooterLink>Classic Cheeseburger</FooterLink>
          <FooterLink>Double Bacon Cheeseburger</FooterLink>
        </div>
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Quick Links
          </h1>
          <FooterLink>Home</FooterLink>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Menu</FooterLink>
          <FooterLink>Contact</FooterLink>
        </div>
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] uppercase text-white">
            Opening Hours
          </h1>
          <p className="text-white text-[18px]">
            Monday - Friday: <span className="text-yellow-300">8am - 4pm</span>
          </p>
          <p className="text-white text-[18px]">
            Saturday: <span className="text-yellow-300">8am - 12am</span>
          </p>
          <div className="flex mt-[2rem] items-center space-x-6">
            <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400" />
            <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
            <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300" />
          </div>
        </div>
      </div>
      <p className="text-center text-white opacity-50 mt-[1.5rem]">
        Copyright © 2024 <span className="text-yellow-300">Ricardo Reiter</span>
        . All rights reserved
      </p>
    </div>
  );
};

export default Footer;
