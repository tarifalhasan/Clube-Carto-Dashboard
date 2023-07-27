import Mesbar from "@/components/common/mês-bar";
import Tipo from "@/components/common/tipo";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FinanceiroRoutes } from "@/constant/data";
import { FaFileImport } from "react-icons/fa";
const MinhaFatura = () => {
  return (
    <div>
      <div className=" space-y-5 ">
        <MainNavbar title="Financeiro" />
        <div className="  space-y-5">
          <SubHeader
            href="financeiro"
            buttonsData={FinanceiroRoutes}
            name="Solicitar 2ª via"
          />
          <div className=" ">
            <div className="">
              <h2 className=" text-lg lg:text-4xl">
                Consulte as informações de 2ª via
              </h2>
              <p className=" text-base text-black font-normal">
                Solicite a 2ª via aqui
              </p>
            </div>
            <div className=" py-8  flex-col lg:max-w-[60%] flex lg:flex-row lg:items-center  gap-5">
              <Mesbar />
              <Tipo></Tipo>
              <div>
                <div className="   hidden lg:block lg:py-5"></div>
                <Button variant={"secondary"}>Buscar</Button>
              </div>
            </div>
            <div className=" bg-white p-6 rounded-14 lg:max-w-[60%]">
              <div className=" ">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-lg sm:text-xl font-semibold text-black">
                        Mês
                      </TableHead>
                      <TableHead className=" text-lg sm:text-xl font-semibold text-black text-right">
                        Exportar PDF
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        2ª via referente ao mês - Julho 2023
                      </TableCell>
                      <TableCell className="text-right">
                        <button className="  inline-flex items-center gap-2">
                          <FaFileImport />
                          <span>Exportar </span>
                        </button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        2ª via referente ao mês - Julho 2023
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="  inline-flex items-center gap-2">
                          <FaFileImport />
                          <span>Exportar </span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        2ª via referente ao mês - Julho 2023
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="  inline-flex items-center gap-2">
                          <FaFileImport />
                          <span>Exportar </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinhaFatura;
