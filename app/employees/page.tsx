import OverView from "@/components/common/overview/overviews";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FuncionáriosRoutes } from "@/constant/data";
import { HiOutlinePlusCircle } from "react-icons/hi";
const Funcionários = () => {
  return (
    <>
      <div className=" space-y-5 ">
        <MainNavbar title="Funcionários" />
        <div className="  space-y-5">
          <OverView />
          <SubHeader
            href="employees"
            buttonsData={FuncionáriosRoutes}
            name="Funcionários"
          />
          <div className="grid py-6  gap-6 lg:grid-cols-2 max-w-[85%]">
            <div className="">
              <h3 className=" text-xl p-3  lg:font-normal lg:text-5xl">
                Configure o acesso de Funcionário
              </h3>
              <div className=" space-y-5 bg-white rounded-14 p-4">
                <h4 className="  text-4xl">Selecionar Funcionários</h4>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">Nome do Funcionário</SelectItem>
                  </SelectContent>
                </Select>
                <Button className=" gap-2" variant={"secondary"}>
                  <HiOutlinePlusCircle size={18} />
                  Adicionar
                </Button>
              </div>
            </div>
            <div className="">
              <h3 className=" text-xl p-3  lg:font-normal lg:text-5xl">
                Bloquear Funcionário
              </h3>
              <div className=" space-y-5 bg-white rounded-14 p-4">
                <h4 className="  text-4xl">Selecionar Funcionários</h4>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">Nome do Funcionário</SelectItem>
                  </SelectContent>
                </Select>
                <Button className=" gap-2" variant={"secondary"}>
                  <HiOutlinePlusCircle size={18} />
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funcionários;
