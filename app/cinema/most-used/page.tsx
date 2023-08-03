"use client";
import { useState } from "react";

import Pagination from "@/components/common/pagination";
import SubHeader from "@/components/sub-header";
import { cinema_routes } from "@/constant/cinema";
import { cn } from "@/lib/utils";

const properstis = [
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 29,90",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 39,90",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 39,90",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 39,90",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 39,90",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 39,90",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 000",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 000",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 000",
  },
  {
    cinemaName: "Cinemark ",
    voucher: "Nome do cinema",
    valor: "R$ 000",
  },
];

const Recentes = () => {
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
      <SubHeader
        title="Mais utilizados"
        href="/cinema"
        buttonsData={cinema_routes}
      />
      <div className=" w-full py-10 ">
        <div className=" pb-10 ">
          <h2 className=" text-card-title font-normal">Veja os seus filmes </h2>
          <h2 className="text-card-title ">mais utilizados</h2>
        </div>
        <div className=" w-full max-h-[94px] py-2 text-white px-6  bg-table-row-dark rounded-[20px]  grid grid-cols-3">
          <div className="">
            <h2 className=" text-[9px] sm:text-xl text-green-light font-semibold">
              Nome do cinema
            </h2>
          </div>
          <div className="">
            <h2 className=" text-[9px] text-center sm:text-xl text-green-light font-semibold">
              Voucher
            </h2>
          </div>
          <div className=" ">
            <h2 className=" text-right text-[9px] sm:text-xl text-green-light font-semibold">
              Valor
            </h2>
          </div>
        </div>
        {/* data rows */}
        <ul className=" w-full space-y-3 pt-6">
          {currentPageData.map((data, index) => (
            <li
              className={cn(
                " px-5  w-full grid grid-cols-3 py-3",
                index % 2 === 0 && "shadow-btn-shadow rounded-2xl"
              )}
              key={index}
            >
              <span className="text-[9px] sm:text-base font-semibold">
                {data.cinemaName}
              </span>
              <span className=" block  text-center text-[9px] sm:text-base font-semibold">
                {data.voucher}
              </span>
              <span className=" text-[9px] block text-right sm:text-base font-semibold">
                {data.valor}
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

export default Recentes;
