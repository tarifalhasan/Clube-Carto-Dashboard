import SearchBar from "@/components/common/SearchBar";
import OverView from "@/components/common/overview/overviews";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { TelemedicineRoutes } from "@/constant/data";
import AppointmentCard from "../health/AppointmentCard";
import QueryFound from "./query-found";

const Telemedicine = () => {
  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Telemedicina" />
      <OverView />
      <SubHeader
        href="telemedicine"
        name="Telemedicina"
        buttonsData={TelemedicineRoutes}
      />
      <h2 className=" text-xl">Agendamento mais recente</h2>
      <AppointmentCard />
      <h2 className=" text-xl">Gerar link consulta</h2>
      <div className="w-full lg:max-w-[768px] p-5 bg-white rounded-14 inline-flex items-center gap-4">
        <SearchBar
          label="Buscar Consulta"
          placeholder="pesquisar"
          className=" w-full"
        />
        <div>
          <Button className=" mt-10" variant={"secondary"}>
            Pesquisar
          </Button>
        </div>
      </div>
      <QueryFound />
    </div>
  );
};

export default Telemedicine;
