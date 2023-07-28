"use client";

import SearchBar from "@/components/common/SearchBar";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ListarEspecialidades = () => {
  const [search, setSearch] = useState("");
  const EspecialidadeList = [
    {
      name: "Cardiology",
      id: "1",
    },
    {
      name: "Orthopedics",
      id: "2",
    },
    {
      name: "Dermatology",
      id: "3",
    },
    {
      name: "Neurology",
      id: "4",
    },
    {
      name: "Ophthalmology",
      id: "5",
    },
  ];

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  // Filter the EspecialidadeList based on the search input
  const filteredEspecialidades = EspecialidadeList.filter((especialidade) =>
    especialidade.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-6 space-y-5">
      <MainNavbar title="Saúde" />
      <SubHeader href="health" name="Listar Especialidades" />
      <div className="grid lg:grid-cols-2 gap-4 lg:max-w-[90%]">
        <SearchBar
          label="Informações de cadastro"
          placeholder="Buscar especialidade"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          value={search}
        />
      </div>
      <div>
        <ul className="divide-rose-700">
          {filteredEspecialidades.map((data, index) => (
            <li
              className={cn("w-full rounded-lg p-2", {
                "bg-[#EBEBEB]": index % 2 === 0,
                "bg-transparent": index % 2 !== 0,
              })}
              key={data.id}
            >
              <p className="text-[#1B1B1B] font-normal text-lg ">{data.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListarEspecialidades;
