import SearchBar from "@/components/common/SearchBar";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import QueryFound from "../query-found";

const ActivePlans = () => {
  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Telemedicina" />
      <SubHeader name="Gerar link consulta" href="telemedicine" />
      <div className=" space-y-4 pt-7 lg:max-w-[489px]">
        <SearchBar label="Buscar planos" placeholder="busquar planos" />
        <Button variant={"secondary"} className=" text-sm lg:text-base px-7">
          Pesquisar
        </Button>
      </div>
      <QueryFound />
    </div>
  );
};

export default ActivePlans;
