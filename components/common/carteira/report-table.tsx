"use client";
import { useState } from "react";

import { TlInboxIn, TlInboxOut } from "@/assets/svg/icons";
import Pagination from "@/components/common/pagination";
import { Button } from "@/components/ui/button";
import {
  ConcludedChip,
  InProcessChip,
  PendingChip,
} from "@/components/ui/chip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { SlWallet } from "react-icons/sl";
import { TbFilter } from "react-icons/tb";
import { TiExportOutline } from "react-icons/ti";
import SearchBar from "../SearchBar";

const invoices = [
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "CONCLUÍDO",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "PENDENTE",
    STATUS: "PROCESSO",
    Tipo: false,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
  {
    DATA: "00/00/0000",
    DESCRIÇÃO: "DESCRIÇÃO",
    ID: "1",
    OBSERVAÇÃO: "OBSERVAÇÃO",
    STATUS: "PENDENTE",
    Tipo: true,
    VALOR: "99,99",
    TOTAL: "99,99",
  },
];

const RelatóriosTableData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the index range of the items to be displayed on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = invoices.slice(startIndex, endIndex);

  return (
    <>
      <div className=" py-6  flex justify-between items-center">
        <div className="  flex  items-center gap-2">
          <h2 className=" text-4xl font-semibold text-skin-gray-950">
            Transações
          </h2>
          <SlWallet size={30} className=" text-skin-JungleGreen" />
        </div>
        <div className=" hidden md:flex items-center gap-4">
          <TbFilter size={25} className=" text-gray-400" />
          <SearchBar placeholder="BUSCAR" />
          <Button
            variant={"secondary"}
            className=" text-white font-bold text-xs"
          >
            EXPORTAR <TiExportOutline size={20} />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader className="  !bg-gray-500  ">
          <TableRow>
            <TableHead className="w-[100px] rounded-l-xl">DATA</TableHead>
            <TableHead>DESCRIÇÃO</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>OBSERVAÇÃO</TableHead>
            <TableHead className="w-[134px] text-center">STATUS</TableHead>
            <TableHead className=" text-center">TIPO</TableHead>
            <TableHead>VALOR</TableHead>
            <TableHead className=" rounded-r-xl">TOTAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" !space-y-5">
          {currentPageData.map((invoice, index) => (
            <TableRow
              key={invoice.DATA}
              className={cn(
                "!border-none rounded-l-xl ",
                index % 2 === 0 ? " bg-transparent" : "bg-heavy-gray-400"
              )}
            >
              <TableCell className="font-medium">{invoice.DESCRIÇÃO}</TableCell>
              <TableCell>{invoice.DESCRIÇÃO}</TableCell>
              <TableCell>{invoice.ID}</TableCell>
              <TableCell>{invoice.OBSERVAÇÃO}</TableCell>
              <TableCell className=" w-[134px]">
                {invoice.STATUS === "PROCESSO" ? (
                  <InProcessChip />
                ) : invoice.STATUS === "PENDENTE" ? (
                  <PendingChip />
                ) : (
                  <ConcludedChip />
                )}
              </TableCell>
              <TableCell className="  flex justify-center">
                {invoice.Tipo ? <TlInboxIn /> : <TlInboxOut />}
              </TableCell>{" "}
              <TableCell className="">{invoice.VALOR}</TableCell>
              <TableCell className="!rounded-r-xl">{invoice.TOTAL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        totalItems={invoices.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default RelatóriosTableData;
