import ClinicCard from "@/app/health/ClinicCard";
import SearchBar from "@/components/common/SearchBar";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { ClínicasDummyList } from "@/constant/data";

const ActivePlans = () => {
  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Telemedicina" />
      <SubHeader name="Planos ativos" href="telemedicine" />
      <div className=" space-y-4 pt-7 lg:max-w-[489px]">
        <SearchBar label="Buscar planos" placeholder="busquar planos" />
        <Button variant={"secondary"} className=" text-sm lg:text-base px-7">
          Pesquisar
        </Button>
      </div>
      <div>
        <h2 className="  pb-4 text-lg lg:text-xl font-normal">
          Seus planos ativos
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

export default ActivePlans;
