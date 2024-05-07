import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  changeClass?: string;
}

const DeliveryPerk = ({ icon, text, changeClass }: Props) => {
  return (
    <div
      className={`flex items-center space-x-3 ${
        changeClass ? changeClass : "mt-[2rem]"
      } `}
    >
      {icon}
      <h1 className="text-[18px] text-black font-medium">{text}</h1>
    </div>
  );
};

export default DeliveryPerk;
