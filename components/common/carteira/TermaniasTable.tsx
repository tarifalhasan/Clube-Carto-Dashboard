"use client";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
} from "@mui/material";
import wallet from "@/assets/images/wallet.svg";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Image from "next/image";
import TableRow from "./TableRow";

function TermaniasTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="font-semibold text-sm md:text-base">
          Veja os seus Terminais
        </h2>
        <div className="flex items-center gap-2">
          <div>
            <IconButton aria-label="delete" onClick={handleClick}>
              <FilterAltOutlinedIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Price Low to High</MenuItem>
              <MenuItem onClick={handleClose}>ligh to Low</MenuItem>
              <MenuItem onClick={handleClose}>max of stock</MenuItem>
            </Menu>
          </div>
          <FormControl sx={{ width: "15ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              sx={{
                borderRadius: "10px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <p className="px-4 py-2 bg-green-600 flex items-center rounded-full  text-sm hover:bg-green-700 text-white cursor-pointer select-none">
            EXPORTAR
            <span className="ml-1 text-white">
              <SendIcon />
            </span>
          </p>
        </div>
      </div>

      <div className="my-5 p-5 border border-gray-200 rounded-lg">
        <div className="w-full md:w-[70%]">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">
              <div className="flex items-center gap-2 relative">
                <Image
                  src={wallet}
                  alt="wallet"
                  height={30}
                  width={30}
                  className="absolute left-0"
                />
                <p className="ml-10">Selecione o seu terminal</p>
              </div>
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

        <div className="mt-8 flex flex-col gap-3 overflow-hidden">
          <div className="w-full flex justify-between bg-[#1A932E2E] py-2 px-4 rounded-lg overflow-auto">
            <span className="mx-3 md:mx-0">NOME</span>
            <span className="mx-3 md:mx-0">CÓDIGO</span>
            <span className="mx-3 md:mx-0">SUPERVISOR</span>
            <span className="mx-3 md:mx-0">PERMISSÃO RETIRADA</span>
          </div>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2">
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

export default TermaniasTable;
