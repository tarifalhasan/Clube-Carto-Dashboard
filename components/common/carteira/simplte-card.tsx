import Image, { StaticImageData } from "next/image";
import React from "react";

interface SimplteCarteiraCardProps {
  title: string;
  count: number | string;
  icon?: StaticImageData;
  buttonText: string;
  onClick?: () => void;
}

const SimplteCarteiraCard: React.FC<SimplteCarteiraCardProps> = ({
  title,
  count,
  icon,
  buttonText,
  onClick,
}) => {
  return (
    <div className=" bg-white  shadow-btn-shadow  rounded-xl px-5 py-5">
      <div className=" flex pt-4 items-center justify-between">
        <h2 className="  text-2xl xl:text-[2.5em] font-bold">{count}</h2>
        {icon && <Image width={40} height={40} src={icon} alt={title} />}
      </div>
      <div className="flex pt-11 items-center justify-between">
        <p>{title}</p>
        <button
          onClick={onClick}
          className=" bg-[#74EEAE] rounded-xl h-[36px] text-[#46674B] font-bold grid place-items-center px-7"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SimplteCarteiraCard;
