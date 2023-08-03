"use client";

import { TlCinema, TlCombos, TlTickerLg } from "@/assets/icons";
import Pagination from "@/components/common/pagination";
import SubHeader from "@/components/sub-header";
import { cinema_routes } from "@/constant/cinema";
import Image from "next/image";
import { useState } from "react";

const Ingressos = () => {
  const properstis = [
    {
      cinemaName: "Cinemark ",
      voucher: "Ingresso 2D - R$18,90",
      combos: "KitMédio - R$ 29,90",
    },
    {
      cinemaName: "Cinemark ",
      voucher: "Ingresso 3D - R$28,90",
      combos: "KitDUPLO - R$ 39,90",
    },
    {
      cinemaName: "Cinemark ",
      voucher: "Ingresso 3D - R$28,90",
      combos: "KitDUPLO - R$ 39,90",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the index range of the items to be displayed on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = properstis.slice(startIndex, endIndex);

  return (
    <>
      <SubHeader title="Ingressos" href="/cinema" buttonsData={cinema_routes} />
      <div className=" w-full py-16 ">
        <div className=" w-full max-h-[94px] py-2 text-white px-6  bg-table-row-dark rounded-[20px] flex justify-between items-center">
          <div className=" gap-2 flex items-center">
            <div>
              <h2 className=" text-base sm:text-xl xl:text-3xl font-semibold">
                Cinema
              </h2>
            </div>
            <Image className=" hidden lg:block" src={TlCinema} alt="cinema" />
          </div>
          <div className=" gap-2 flex items-center">
            <div>
              <h2 className=" text-base sm:text-xl xl:text-3xl font-semibold">
                Voucher
              </h2>
              <p className="text-base text-right hidden sm:block ">Preço</p>
            </div>
            <Image className=" hidden lg:block" src={TlTickerLg} alt="cinema" />
          </div>
          <div className=" gap-2 flex items-center">
            <div>
              <h2 className=" text-base sm:text-xl xl:text-3xl font-semibold">
                Compoa
              </h2>
              <p className=" hidden sm:block text-base text-right">Preço</p>
            </div>
            <Image className=" hidden lg:block" src={TlCombos} alt="cinema" />
          </div>
        </div>
        {/* data rows */}
        <ul className=" w-full space-y-3 pt-6">
          {currentPageData.map((data, index) => (
            <li
              className=" shadow-btn-shadow px-5 flex justify-between items-center py-2 rounded-2xl"
              key={index}
            >
              <span className="text-xs sm:text-base font-semibold">
                {data.cinemaName}
              </span>
              <span className=" text-xs sm:text-base font-semibold">
                {data.voucher}
              </span>
              <span className=" text-xs sm:text-base font-semibold">
                {data.combos}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        totalItems={properstis.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Ingressos;
