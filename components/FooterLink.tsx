import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FooterLink = ({ children }: Props) => {
  return (
    <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
      {children}
    </p>
  );
};

export default FooterLink;
