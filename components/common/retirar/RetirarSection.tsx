"use client";

import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import TableRowRetirar from "@/components/common/retirar/TableRowRetirar";

function RetirarSection() {
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="my-8 border-2 border-gray-200 rounded-md p-5">
        <h4 className="font-semibold">Minhas retiradas</h4>

        <div className="my-5 flex flex-col md:flex-row items-center gap-5">
          <div>
            <p>De</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
          <div>
            <p>Até</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
          <div>
            <p>Status</p>
            <TextField
              size="small"
              id="outlined-basic"
              type="number"
              label="Todos"
              variant="outlined"
            />
          </div>
          <div className="flex items-center">
            <p className="mt-5 py-1 px-3 rounded-full bg-[#74EEAE] flex items-center hover:bg-green-500 active:bg-green-600 cursor-pointer select-none">
              Pesquisar
            </p>
          </div>
        </div>

        <div className="my-5 flex flex-col gap-3">
          <div className="w-full flex justify-between  bg-[#353A40] py-2 px-4 rounded-lg overflow-auto">
            <span className="mx-3 md:mx-0 text-[#4DBE83]">ID</span>
            <span className="mx-3 md:mx-0 text-[#4DBE83]">SOLICITAÇÃO</span>
            <span className="mx-3 md:mx-0 text-[#4DBE83]">PAGAMENTO</span>
            <span className="mx-3 md:mx-0 text-[#4DBE83]">CHAVE PIX</span>
            <span className="mx-3 md:mx-0 text-[#4DBE83]">DOCUMENTO</span>
            <span className="mx-3 md:mx-0 text-[#4DBE83]">NOME</span>
            <span className="mx-3 md:mx-0 text-[#4DBE83]">VALOR</span>
            <span className="mx-3 md:mx-0 text-[#4DBE83]">STATUS</span>
          </div>
          <TableRowRetirar type="green" />
          <TableRowRetirar type="green" />
          <TableRowRetirar type="yellow" />
          <TableRowRetirar type="green" />
          <TableRowRetirar type="black" />
          <TableRowRetirar type="green" />
        </div>
      </div>

      <div className="mb-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2">
        <div className="w-full md:w-[50%] flex items-center gap-2">
          <div className="w-[60%] md:w-[40%]">
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                <p className="text-sm ">10 Registros por página</p>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Selecione o seu terminal"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <p className="text-[#569A59] text-sm">Total de registros: 3</p>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-end items-center gap-2">
            <p className="text-sm">Página 1 de 1</p>
            <Pagination count={1} showFirstButton showLastButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetirarSection;
