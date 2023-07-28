import SearchBar from "@/components/common/SearchBar";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { ClínicasDummyList } from "@/constant/data";
import ClinicCard from "../ClinicCard";

const ListarClínicas = () => {
  return (
    <div className=" pb-6 space-y-5">
      <MainNavbar title="Saúde" />
      <SubHeader href="health" name="Listar Clínicas" />
      <div className=" grid lg:grid-cols-2 gap-4 lg:max-w-[90%]">
        <SearchBar
          label="Nome da clínica"
          placeholder="Nome para cadastro da clínica"
        />
        <SearchBar
          label="Nome da clínica"
          placeholder="Nome para cadastro da clínica"
        />
        <div>
          <Button variant={"secondary"}>Pesquisar</Button>
        </div>
      </div>
      <div>
        <h2 className=" pt-10 pb-4 text-lg lg:text-xl font-normal">
          Clínicas próximas com o endereço preenchido na localização
        </h2>
        <div className="grid gap-6 grid-cols-12">
          {ClínicasDummyList.map((data) => (
            <div
              key={data.id}
              className=" col-span-12 md:col-span-6 lg:col-span-4"
            >
              <ClinicCard
                name={data.name}
                Especialidades={data.Especialidades}
                location={data.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListarClínicas;

// listar-clicas
