import Schedule from "@/components/Schedule";
import OverView from "@/components/common/overview/overviews";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { SaúdeRoutes } from "@/constant/data";
import AppointmentCard from "./AppointmentCard";

const Health = () => {
  return (
    <div className=" space-y-5 pb-6">
      <MainNavbar title="Saúde" />
      <OverView />
      <SubHeader href="health" buttonsData={SaúdeRoutes} name="Saúde" />
      <div>
        <h4 className=" pb-5 text-xl font-normal">Agendamento mais recente</h4>
        <AppointmentCard />
      </div>
      <Schedule />
    </div>
  );
};

export default Health;
