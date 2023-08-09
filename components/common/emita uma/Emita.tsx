"use client";

import React from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import pix from "@/assets/images/pix.svg";
import link from "@/assets/images/link.svg";
import assign from "@/assets/images/assign.svg";
import boleto from "@/assets/images/boleto.svg";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Emita() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="rounded-md border border-gray-200 p-5">
      <h2 className="text-xl font-semibold">Escolha o tipo de cobrança</h2>
      <p className="text-xs text-[#292D32]">
        Busque por nome, e-mail, celular, CPF, CNPJ, grupo de clientes
      </p>

      <div className="my-5 flex flex-wrap gap-5">
        <div className="flex justify-between items-center gap-5 px-3 py-2 border border-gray-200 rounded-lg">
          <Image src={boleto} alt="boleto" height={30} width={30} />
          <p className="font-bold">Boleto bancário</p>
        </div>
        <div className="flex justify-between items-center gap-5 px-3 py-2 border border-gray-200 rounded-lg">
          <Image src={pix} alt="pix" height={30} width={30} />
          <p className="font-bold">Pix</p>
        </div>
        <div className="flex justify-between items-center gap-5 px-3 py-2 border border-gray-200 rounded-lg">
          <Image src={link} alt="link" height={30} width={30} />
          <p className="font-bold">Link de pagamento</p>
        </div>
        <div className="flex justify-between items-center gap-5 px-3 py-2 border border-gray-200 rounded-lg">
          <Image src={assign} alt="assign" height={30} width={30} />
          <p className="font-bold">Assinatura recorrente</p>
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-xl font-semibold">
          Escolha para quem deseja enviar o boleto
        </h2>
        <p className="text-xs text-[#292D32]">
          Busque por nome, e-mail, celular, CPF, CNPJ, grupo de clientes
        </p>
      </div>

      <div className="pb-5 w-[90%] md:w-[40%]">
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Cliente*
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="delete">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="digite o cpf ou um grupo"
          />
        </FormControl>
      </div>
      <div className="my-5">
        <h2 className="text-xl font-semibold">
          Escolha o item que deseja cobrar
        </h2>
        <p className="text-xs text-[#292D32]">
          Busque pelo nome do item de cobrança
        </p>
      </div>

      <div className="pb-5 w-[90%] md:w-[40%]">
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Item*</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            }
            label="digite o cpf ou um grupo"
          />
        </FormControl>
      </div>

      <div className="my-3">
        <h2 className="text-xl font-semibold">Itens selecionados</h2>
        <p className="text-xs text-[#292D32]">
          Busque pelo nome do item de cobrança
        </p>
      </div>
      <div className="border border-gray-200 p-6 flex flex-col md:flex-row justify-between rounded-md my-5 gap-3 md:gap-0">
        <div className="">
          <h3>Descrição do item</h3>
          <p className="text-xs">Lorem ipsum </p>
        </div>
        <div className="w-[70%] flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="w-full md:w-[50%]">
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel htmlFor="outlined-adornment-password">
                Item*
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                startAdornment={
                  <InputAdornment position="start">
                    <p>R$</p>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="w-full md:w-[50%] flex justify-between items-center py-2 px-3 border border-blue-200 rounded-lg">
            <InputAdornment position="start">
              <IconButton
                aria-label="delete"
                onClick={() => setCount((prevState: number) => prevState + 1)}
              >
                <AddIcon />
              </IconButton>
            </InputAdornment>
            <p>{count}</p>
            <InputAdornment position="start">
              <IconButton
                aria-label="delete"
                onClick={() =>
                  setCount((prevState: number) => {
                    if (prevState > 0) {
                      return prevState - 1;
                    }
                    return prevState;
                  })
                }
              >
                <RemoveIcon />
              </IconButton>
            </InputAdornment>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-5">
        <h2 className="text-xl font-semibold">Informações adicionais</h2>
        <p className="my-3 text-sm">
          Deseja adicionar um desconto sobre a cobrança?
        </p>
        <p className="text-xs">Desconto sobre os itens</p>
      </div>

      <div className="pb-5 w-[90%] md:w-[60%] flex  text-center">
        <select className="md:w-[15%] p-2 flex bg-[#353A40] text-white rounded-l-lg">
          <option>R $</option>
          <option>US $</option>
          <option>CAD $</option>
        </select>
        <input
          type="number"
          name=""
          id=""
          className="border border-gray-300 rounded-r-lg px-2 "
        />
      </div>
      <div>
        <p className="text-lg">Deseja adicionar um desconto condicional</p>
        <p className="text-xs">
          Desconto condicionais incentivam seus clientes a pagarem as cobranças
          antes da data de vencimento
        </p>
        <p className="text-xs">Observação</p>
        <div className="py-5  flex flex-col md:flex-row gap-3 md:gap-10">
          <div className="flex items-center">
            <div className="mt-2  flex text-center">
              <select className=" p-2 flex bg-[#353A40] text-white rounded-l-lg">
                <option>R $</option>
                <option>US $</option>
                <option>CAD $</option>
              </select>
              <input
                type="number"
                name=""
                id=""
                className="border border-gray-300 rounded-r-lg px-2 "
              />
            </div>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>

        <div className="w-full">
          <p className="text-lg font-semibold">
            Deseja adicionar alguma observação?
          </p>
          <p className="text-sm">A observação aparece no e-mail da cobrança</p>

          <div className="w-full md:w-[70%] my-6">
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              rows={6}
            />
            <p className="text-xs mt-3">
              Máximo de 4 linhas com 100 caracteres cada
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 w-[70%] md:w-[40%]">
        <Button fullWidth variant="outlined" color="success">
          Emitir cobrança
        </Button>
      </div>
    </div>
  );
}

export default Emita;
