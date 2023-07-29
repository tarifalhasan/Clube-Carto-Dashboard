import { ApprovedIcon, LockRedIcon, RefoundIcon } from "@/assets/svg/icons";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { CashbackRoutess } from "@/constant/data";
import { BsCreditCard2Back } from "react-icons/bs";
import EarningDataTable from "./data-table";
const MyEarning = () => {
  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Cashback" />
      <SubHeader
        name="MyEarning"
        buttonsData={CashbackRoutess}
        href="cashback"
      />
      <div className="grid grid-cols-11  gap-6">
        <div className=" col-span-11  lg:col-span-5 space-y-6">
          <div className="bg-white rounded-14 h-[252px] shadow-5xl p-2 lg:p-5">
            <Button variant={"secondary"} className=" lg:text-4xl px-7 gap-2">
              <BsCreditCard2Back size={25} />
              Meus ganhos
            </Button>
            <h2 className=" py-5 text-7xl font-semibold text-black">
              R$999.00
            </h2>
          </div>
          <div className="bg-white rounded-14 shadow-5xl p-2 lg:p-5">
            <Button variant={"secondary"} className=" lg:text-4xl px-7 gap-2">
              <BsCreditCard2Back size={25} />
              Meus ganhos
            </Button>
            <div className=" pt-4">
              <EarningDataTable
                tableHead={["Transação", "Data", "Valor"]}
                tableData={[
                  {
                    name: "Transação",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Transação",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Transação",
                    data: "Data",
                    value: "Valor",
                  },
                ]}
              />
            </div>
          </div>
          <div className="bg-white rounded-14 shadow-5xl p-2 lg:p-5">
            <Button variant={"secondary"} className=" lg:text-4xl px-7 gap-2">
              <BsCreditCard2Back size={25} />
              Meus ganhos
            </Button>
            <div className=" pt-4">
              <EarningDataTable
                tableHead={["Transação", "Data", "Valor"]}
                tableData={[
                  {
                    name: "Transação",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Transação",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Transação",
                    data: "Data",
                    value: "Valor",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="col-span-11 lg:col-span-6 space-y-6">
          <div className="bg-white rounded-14 min-h-[252px] shadow-5xl  p-5">
            <Button variant={"secondary"} className=" lg:text-4xl px-7 gap-2">
              <BsCreditCard2Back size={25} />
              Receita
            </Button>
            <div className=" flex justify-between items-center flex-wrap pt-7">
              <div className=" space-y-2">
                <RefoundIcon />
                <p className=" text-base">Pendentes</p>
                <h2 className=" text-3xl">R$999.00</h2>
              </div>
              <div className=" space-y-2">
                <ApprovedIcon />
                <p className=" text-base">Aprovados</p>
                <h2 className=" text-3xl">R$999.00</h2>
              </div>
              <div className=" space-y-2">
                <LockRedIcon />
                <p className=" text-base">Bloqueados</p>
                <h2 className=" text-3xl">R$999.00</h2>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-14 shadow-5xl p-2 lg:p-5">
            <Button variant={"secondary"} className=" lg:text-4xl px-7 gap-2">
              <BsCreditCard2Back size={25} />
              Extratos{" "}
            </Button>
            <div className=" pt-4">
              <EarningDataTable
                tableHead={["Produto", "Data", "Valor"]}
                tableData={[
                  {
                    name: "Saldo do meu extrato",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Saldo do meu extrato",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Saldo do meu extrato",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Saldo do meu extrato",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Saldo do meu extrato",
                    data: "Data",
                    value: "Valor",
                  },
                  {
                    name: "Saldo do meu extrato",
                    data: "Data",
                    value: "Valor",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEarning;
