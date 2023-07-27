"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableType } from "@/interfaces";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { VscMenu } from "react-icons/vsc";
function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div>
      <h6 className=" text-base font-normal text-black py-5">Período</h6>
      <div className={cn("grid gap-2 btn", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

const FiltersElment = () => (
  <div className=" flex items-center gap-6">
    <DatePickerWithRange />

    <div>
      <h6 className=" text-base font-normal text-black py-5">Período</h6>
      <Button
        variant={"primary"}
        className="btn gap-x-3 flex-row flex items-center"
      >
        <span>Selecionar</span> <MdKeyboardArrowRight />
      </Button>
    </div>
    <div>
      <h6 className=" text-base font-normal text-black py-5">
        Tipo de transação
      </h6>
      <Button
        variant={"primary"}
        className="btn gap-x-3 flex-row flex items-center"
      >
        <span>Selecionar o tipo de transação</span> <MdKeyboardArrowRight />
      </Button>
    </div>
    {/* Filter */}

    <div>
      <h6 className=" text-base font-normal text-white py-5">h</h6>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"secondary"}>Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Filter1</DropdownMenuItem>
          <DropdownMenuItem>Filter2</DropdownMenuItem>
          <DropdownMenuItem>Filter3</DropdownMenuItem>
          <DropdownMenuItem>Filter4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div>
      <h6 className=" text-base font-normal text-white py-5">h</h6>
      <Button
        variant={"primary"}
        className="btn gap-x-3 flex-row flex items-center"
      >
        <VscMenu /> <span>Mais filtros</span>
      </Button>
    </div>
  </div>
);

interface ShortEmementProps {
  handleShownItemsChange: (value: number) => void;
  showingItems: number;
}
// Shprting  the items that will be shown when the first when clicked

const ShortElements: React.FC<ShortEmementProps> = ({
  handleShownItemsChange,
  showingItems,
}) => {
  const dropdownValues = Array.from({ length: 11 }, (_, index) => index + 3); // Generate values from 3 to 13

  return (
    <>
      <div className=" flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant={"primary"}
              className="btn gap-x-3 flex-row flex items-center"
            >
              <span>{showingItems}</span> <MdKeyboardArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownValues.map((value) => (
              <DropdownMenuItem
                key={value}
                onClick={() => handleShownItemsChange(value)}
              >
                {value}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <h3 className=" text-lg  font-semibold">itens por página</h3>
      </div>
    </>
  );
};

interface Props {
  data: DataTableType[];
}

const DataTable: React.FC<Props> = ({ data }) => {
  const itemsPerPage = 3; // Number of items to show per page
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [shownItems, setShownItems] = React.useState<number>(4);

  const handleShownItemsChange = (value: number) => {
    setShownItems(value);
    setCurrentPage(1); // Reset to the first page when changing the number of items to show
  };

  // Calculate the starting index and ending index for the current page
  const startIndex = (currentPage - 1) * shownItems;
  const endIndex = startIndex + shownItems;

  // Get the data to show for the current page
  const currentPageData = data.slice(startIndex, endIndex);

  // Handle next and previous pagination buttons
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const dropdownValues = Array.from({ length: 11 }, (_, index) => index + 3); // Generate values from 3 to 13

  return (
    <div className=" bg-white rounded-14 space-y-5 p-5">
      {/* Filter */}
      <FiltersElment />
      {/* Short */}

      <div className=" border-y border-table-border py-2 flex items-center  justify-between ">
        <ShortElements
          handleShownItemsChange={handleShownItemsChange}
          showingItems={shownItems}
        />
        {/* //  Pagination   for the per page items s
         */}
        <div className="flex items-center gap-3">
          <button
            className="preview"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <Button variant={"primary"}>{currentPage}</Button>
          <button
            className="preview"
            disabled={currentPage * shownItems >= data.length}
            onClick={handleNextPage}
          >
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>
      </div>
      {/* table Data */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Data</TableHead>
            <TableHead className=" w-[140px]">Protocolo</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead className="">Valor</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentPageData.map((invoice) => (
            <TableRow key={invoice.data}>
              <TableCell className="font-medium">{invoice.data}</TableCell>
              <TableCell>{invoice.protocolo}</TableCell>
              <TableCell>{invoice.descrição}</TableCell>
              <TableCell>{invoice.valor}</TableCell>
              <TableCell className="text-right">{invoice.ações}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default dynamic(() => Promise.resolve(DataTable), {
  ssr: false,
});
