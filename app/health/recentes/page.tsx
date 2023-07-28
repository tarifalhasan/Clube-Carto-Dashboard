"use client";

import SearchBar from "@/components/common/SearchBar";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { ClínicasDummyList } from "@/constant/data";
import { useState } from "react";
import ClinicCard from "../ClinicCard";
const Agendamentos = () => {
  const [clinicSpecialty, setClinicSpecialty] = useState("");
  const [clinicLocation, setClinicLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [foundClinic, setfoundClinic] = useState<any>(null);
  const onHandleClinicName = (value: string) => {
    setClinicSpecialty(value);
    console.log(value);
  };

  const onHandleClinicLocation = (value: string) => {
    setClinicLocation(value);
  };

  const foundClinicSpecialty = ClínicasDummyList.find((clínicas) =>
    clínicas.Especialidades.toLocaleLowerCase().includes(
      clinicSpecialty.toLocaleLowerCase()
    )
  );

  const foundClinicLocation = ClínicasDummyList.find((clínicas) =>
    clínicas.location
      .toLocaleLowerCase()
      .includes(clinicLocation.toLocaleLowerCase())
  );

  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      setLoading(true);
      const getClinic = foundClinicSpecialty || foundClinicLocation;
      console.log(getClinic);
      setfoundClinic(getClinic);
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-6 space-y-5">
      <MainNavbar title="Saúde" />
      <SubHeader href="health" name="Agendamentos" />
      <form className=" space-y-4" onSubmit={onSearch}>
        <div className="grid lg:grid-cols-2 gap-4 lg:max-w-[90%]">
          <SearchBar
            label="Nome da clínica"
            placeholder="Buscar especialidade"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onHandleClinicName(e.target.value)
            }
            value={clinicSpecialty}
          />
          <SearchBar
            label="Localização"
            placeholder="Local da clínica"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onHandleClinicLocation(e.target.value)
            }
            value={clinicLocation}
          />
        </div>
        <Button type="submit" variant="secondary">
          Pesquisar
        </Button>
      </form>
      {loading && <p>Loading...</p>}

      <div>
        <h3 className=" py-6 text-xl font-normal">Agendamento encontrado</h3>
        <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <ClinicCard
              Especialidades="Estado - Cidade"
              name="Hospital Vitória, Rio de Janeiro"
              location="Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendamentos;
