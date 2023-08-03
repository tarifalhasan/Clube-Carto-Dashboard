"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [selectedItemsPerPage, setSelectedItemsPerPage] =
    useState(itemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPageChange = (value: string) => {
    setSelectedItemsPerPage(Number(value));
    onPageChange(1); // Reset to the first page when changing items per page
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };
  return (
    <div className=" absolute bottom-0 py-6 left-0 right-0 flex justify-between  flex-wrap items-center">
      <div className="flex items-center gap-2">
        <div>
          <Select>
            <SelectTrigger className=" w-[220px]">
              <SelectValue className="" placeholder="10 Registros por página" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pages</SelectLabel>
                <SelectItem
                  value={"10"}
                  onClick={() => handleItemsPerPageChange("10")}
                >
                  10
                </SelectItem>
                <SelectItem
                  value={"15"}
                  onClick={() => handleItemsPerPageChange("15")}
                >
                  15
                </SelectItem>
                <SelectItem
                  value={"20"}
                  onClick={() => handleItemsPerPageChange("20")}
                >
                  20
                </SelectItem>
                <SelectItem
                  value={"26"}
                  onClick={() => handleItemsPerPageChange("26")}
                >
                  26
                </SelectItem>
                <SelectItem
                  value={"35"}
                  onClick={() => handleItemsPerPageChange("35")}
                >
                  35
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-[#569A59]">
          Total de registros: <b>{selectedItemsPerPage}</b>
        </div>
      </div>
      <div className="inline-flex gap-3 items-center">
        <p>
          Página <b>{currentPage}</b> de <b>{totalPages}</b>
        </p>
        <div className="inline-flex items-center gap-2">
          <button
            className={cn(
              " shadow-btn-shadow rounded-sm p-2",
              currentPage === 1 ? "disabled:opacity-50  bg-green-light" : " "
            )}
            onClick={handlePreviousPage}
          >
            <MdKeyboardArrowLeft size={25} />
          </button>
          <button
            className={cn(
              " shadow-btn-shadow rounded-sm p-2",
              currentPage === 1 ? "disabled:opacity-50  bg-green-light" : " "
            )}
            onClick={handleFirstPage}
          >
            <MdKeyboardDoubleArrowLeft size={25} />
          </button>
          <button
            className={cn(
              " shadow-btn-shadow rounded-sm p-2",
              currentPage !== 1 ? "disabled:opacity-50  bg-green-light" : " "
            )}
            onClick={handleLastPage}
          >
            <MdKeyboardDoubleArrowRight size={25} />
          </button>
          <button
            className={cn(
              " shadow-btn-shadow rounded-sm p-2",
              currentPage !== 1 ? "disabled:opacity-50  bg-green-light" : " "
            )}
            onClick={handleNextPage}
          >
            <MdKeyboardArrowRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
