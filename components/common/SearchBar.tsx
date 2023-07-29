import React, { InputHTMLAttributes } from "react";

interface Props {
  label: string;
  className?: string;
}

const SearchBar: React.FC<
  Props & Omit<InputHTMLAttributes<HTMLInputElement>, "label">
> = ({ label, className, ...props }) => {
  return (
    <div className={className}>
      <h3 className=" py-2 text-lg sm:text-xl font-semibold  text-text-green">
        {label}
      </h3>
      <div className=" search">
        <input
          {...props}
          className=" text-base font-normal text-[#565656] w-full outline-none focus:outline-none border-none focus:border-none"
        />
        <svg
          className=" max-w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.88647 11.5463C2.88647 6.77044 6.77034 2.88657 11.5462 2.88657C16.322 2.88657 20.2059 6.77044 20.2059 11.5463C20.2059 16.3221 16.322 20.206 11.5462 20.206C6.77034 20.206 2.88647 16.3221 2.88647 11.5463ZM25.5562 23.5154L20.6563 18.614C22.176 16.6598 23.0925 14.2106 23.0925 11.5463C23.0925 5.17994 17.9126 0 11.5463 0C5.17994 0 0 5.17994 0 11.5463C0 17.9126 5.17994 23.0925 11.5463 23.0925C14.2106 23.0925 16.6598 22.176 18.614 20.6563L23.5154 25.5562C23.7968 25.8376 24.1663 25.9791 24.5358 25.9791C24.9053 25.9791 25.2748 25.8376 25.5562 25.5562C26.1205 24.9919 26.1205 24.0797 25.5562 23.5154Z"
            fill="#569A59"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
