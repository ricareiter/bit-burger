import Link from "next/link";
import { ImCross } from "react-icons/im";

interface Props {
  handlerNav: () => void;
  showNav: boolean;
}

const MobileNav = ({ handlerNav, showNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002] `}
    >
      <ImCross
        onClick={handlerNav}
        className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white"
      />
      <div
        className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}
      >
        <ul className="space-y-10">
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
