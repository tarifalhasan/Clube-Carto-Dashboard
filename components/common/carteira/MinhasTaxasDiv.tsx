"use client";

import wallet from "@/assets/images/wallet.svg";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

function MinhasTaxasDiv() {
  const [age, setAge] = useState("");
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div className="my-8 p-5 px-8 border-2 border-gray-300 rounded-md">
      <h3 className="py-5 text-[#569A59] font-bold">
        Confira as tarifas e prazos da sua conta
      </h3>
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
      <div className="py-8 px-5 flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[#292D32]">Tarifa por recebimento</p>
            <p className="font-bold">R$ XX,XX</p>
          </div>
          <div>
            <p className="text-[#292D32]">
              Emissão, baixa, cancelamento e boletos não pagos
            </p>
            <p className="font-bold">R$ XX,XX</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p>Tarifa por recebimento</p>
            <p className="font-bold">Imediata</p>
          </div>
          <div>
            <p>Emissão, baixa, cancelamento e boletos não pagos</p>
            <p className="font-bold">Grátis</p>
          </div>
        </div>
      </div>
      <p className="px-5 py-3 text-sm text-[#569A59]">Editar configurações</p>
    </div>
  );
}

export default MinhasTaxasDiv;
