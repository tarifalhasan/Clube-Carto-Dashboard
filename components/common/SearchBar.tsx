import React, { InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  label?: string;
  className?: string;
  icon?: React.ReactNode;
}

const SearchBar: React.FC<
  Props & Omit<InputHTMLAttributes<HTMLInputElement>, "label">
> = ({
  label,
  className,
  icon = <FiSearch size={25} className="text-[#74EEAE]" />,
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <h3 className=" py-2 text-lg sm:text-xl font-semibold  text-text-green">
          {label}
        </h3>
      )}
      <div className=" search">
        <input
          {...props}
          className=" text-base font-normal text-[#565656] w-full outline-none focus:outline-none border-none focus:border-none"
        />
        {icon}
      </div>
    </div>
  );
};

export default SearchBar;
