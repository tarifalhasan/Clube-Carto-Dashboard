"use client";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import wallet from "@/assets/images/wallet.svg";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Image from "next/image";

function TermaniasTable() {
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div className="py-8">
      <div className="flex justify-between">
        <h2 className="font-semibold">Veja os seus Terminais</h2>
        <div className="flex">
          <IconButton aria-label="delete">
            <FilterAltOutlinedIcon />
          </IconButton>
          <FormControl sx={{ width: "15ch" }} variant="outlined" size="medium">
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
          <p className="px-4 bg-green-600 flex items-center rounded-full ml-2 text-sm hover:bg-green-700 text-white cursor-pointer select-none">
            EXPORTAR
            <span className="ml-1 text-white">
              <SendIcon />
            </span>
          </p>
        </div>
      </div>

      <div className="my-5 p-5 border border-gray-200 rounded-lg">
        <div className="w-[70%]">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">
              <div className="flex items-center gap-2">
                <Image src={wallet} alt="wallet" height={30} width={30} />
                Selecione o seu terminal
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
      </div>
    </div>
  );
}

export default TermaniasTable;
