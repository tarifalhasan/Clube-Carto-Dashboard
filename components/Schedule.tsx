import { cn } from "@/lib/utils";
import React from "react";
import SearchBar from "./common/SearchBar";
import { DatePicker } from "./common/data-picker";
import { Button } from "./ui/button";

interface Props {
  columnDirection?: "column" | "row";
}

const Schedule: React.FC<Props> = ({ columnDirection = "row" }) => {
  return (
    <div
      className={cn(
        " grid  w-full   rounded-14 drop-shadow-5xl p-5 bg-white gap-6",
        columnDirection == "column" ? "grid-cols-1" : "lg:grid-cols-2"
      )}
    >
      <div className="space-y-5 ">
        <SearchBar
          label="Nome da clínica"
          type="text"
          placeholder="Nome para cadastro da clínica"
          // othes props like onChange ets...
        />
        <SearchBar
          label="Especialidade"
          type="text"
          placeholder="Nome da especialidade"
          // othes props like onChange ets...
        />
        <SearchBar
          label="Localização"
          type="text"
          placeholder="Local da clínica"
          // othes props like onChange ets...
        />
        <SearchBar
          label="Nome da clínica"
          type="text"
          placeholder="Nome para cadastro da clínica"
          // othes props like onChange ets...
        />
      </div>
      <div>
        <h3 className=" py-2 text-lg sm:text-xl font-semibold  text-text-green">
          Data e Horário comercial para marcação na clínica
        </h3>
        <div className="flex py-4 gap-4 items-center">
          <DatePicker />
          <Button variant={"secondary"}>Agendar</Button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
