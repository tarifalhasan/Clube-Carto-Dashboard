import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import pix from "@/assets/images/pix.svg";
import link from "@/assets/images/link.svg";
import assign from "@/assets/images/assign.svg";
import boleto from "@/assets/images/boleto.svg";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function emita_uma_cobrança() {
  return (
    <div>
      <SubHeader
        href="/emita_uma"
        name="Emita uma cobrança"
        buttonsData={carteira_routes}
      />

      <div className="rounded-md border border-gray-200 p-5 my-8">
        <h2 className="text-xl font-semibold">Escolha o tipo de cobrança</h2>
        <p className="text-xs text-[#292D32]">
          Busque por nome, e-mail, celular, CPF, CNPJ, grupo de clientes
        </p>

        <div className="my-5 flex gap-5">
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

        <div className="pb-5">
          <FormControl sx={{ width: "32ch" }} variant="outlined" size="small">
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

        <div className="pb-5">
          <FormControl sx={{ width: "32ch" }} variant="outlined" size="small">
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
        <div className="border border-gray-200 p-6 flex justify-between rounded-md my-5">
          <div className="">
            <h3>Descrição do item</h3>
            <p className="text-xs">Lorem ipsum </p>
          </div>
          <div className="w-[70%] flex gap-5">
            <FormControl sx={{ width: "32ch" }} variant="outlined" size="small">
              <InputLabel htmlFor="outlined-adornment-password">
                Item*
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                endAdornment={
                  <InputAdornment position="start">
                    <p>R$</p>
                  </InputAdornment>
                }
                label="digite o cpf ou um grupo"
              />
            </FormControl>
            <div className="w-[50%] flex justify-between items-center py-2 px-3 border border-blue-200 rounded-lg">
              <InputAdornment position="start">
                <IconButton aria-label="delete">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
              <p>1</p>
              <InputAdornment position="start">
                <IconButton aria-label="delete">
                  <RemoveIcon />
                </IconButton>
              </InputAdornment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default emita_uma_cobrança;
