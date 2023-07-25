'use client';
import MainNavbar from '@/components/main-navbar/main-navbar';
import SubHeader from '@/components/sub-header';

import { associadosButtonData } from '@/constant/data';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const AdicionarAssociado = () => {
  return (
    <div className=" ">
      <MainNavbar title="Associados" />
      <div className=" space-y-5 py-10">
        <SubHeader
          name="Adicionar"
          buttonsData={associadosButtonData}
          href="rassociado"
        />
        <div className="shadow-5xl space-y-4 rounded-2xl p-5 lg:p-8 lg:max-w-[45%] w-full">
          <h2 className=" text-4xl leading-[26.82px]  text-black">
            Preencha os dados para <br className="hidden xl:block" /> adicionar
            um novo associado
          </h2>
          {/* Status */}
          <div className="flex items-center space-x-2">
            <Label htmlFor="status">Status </Label>
            <Switch id="Status " />
          </div>
          <form action="#" className=" space-y-3">
            <Input placeholder="Name" />
            <Input placeholder="cpf/cnpj" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Sexo" type="text" />
            <Input placeholder="Nascimento" type="text" />

            <Select>
              <SelectTrigger className=" min-w-full w-full">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Estado</SelectLabel>
                  <SelectItem value="us">US</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                  <SelectItem value="bd">BD</SelectItem>
                  <SelectItem value="ind">IND</SelectItem>
                  <SelectItem value="sl">SL</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className=" min-w-full w-full">
                <SelectValue placeholder="Produto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Produto</SelectLabel>
                  <SelectItem value="mango">mango</SelectItem>
                  <SelectItem value="uk">orange</SelectItem>
                  <SelectItem value="bd">ram</SelectItem>
                  <SelectItem value="ind">led</SelectItem>
                  <SelectItem value="sl">SL</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className=" min-w-full w-full">
                <SelectValue placeholder="Cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cidade</SelectLabel>
                  <SelectItem value="mango">Rangpur</SelectItem>
                  <SelectItem value="uk">Dhaka</SelectItem>
                  <SelectItem value="bd">Rajshhi</SelectItem>
                  <SelectItem value="ind">Khulna</SelectItem>
                  <SelectItem value="sl">barisal</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className=" min-w-full w-full">
                <SelectValue placeholder="Grupo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Grupo</SelectLabel>
                  <SelectItem value="mango">Rangpur</SelectItem>
                  <SelectItem value="uk">Dhaka</SelectItem>
                  <SelectItem value="bd">Rajshhi</SelectItem>
                  <SelectItem value="ind">Khulna</SelectItem>
                  <SelectItem value="sl">barisal</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdicionarAssociado;
