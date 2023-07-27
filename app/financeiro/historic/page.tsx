import DataTable from "@/components/common/data-table";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { FinanceiroRoutes, dummyDataForTable } from "@/constant/data";

const Histórico = () => {
  return (
    <div>
      <div className=" space-y-5 ">
        <MainNavbar title="Financeiro" />
        <div className="  space-y-5">
          <SubHeader
            href="financeiro"
            buttonsData={FinanceiroRoutes}
            name="histórico"
          />
          <div className=" ">
            <DataTable data={dummyDataForTable} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histórico;
