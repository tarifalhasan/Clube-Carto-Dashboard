import DataTable from "@/components/common/data-table";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { FinanceiroRoutes, dummyDataForTable } from "@/constant/data";

const MinhaFatura = () => {
  return (
    <div>
      <div className=" space-y-5 ">
        <MainNavbar title="Financeiro" />
        <div className="  space-y-5">
          <SubHeader
            href="financeiro"
            buttonsData={FinanceiroRoutes}
            name="Minha fatura"
          />
          <div className=" ">
            <div className="py-10">
              <h2 className=" text-lg lg:text-4xl">
                Consulte as informações da sua fatura
              </h2>
              <p className=" text-base text-black font-normal">
                Aqui estão todos os dados da fatura da sua conta
              </p>
            </div>
            <DataTable data={dummyDataForTable} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinhaFatura;
