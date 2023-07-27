import { FileAdd, ImportFileIcon, RecipeIcon } from "@/assets/svg/icons";
import OverView from "@/components/common/overview/overviews";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Mesbar from "@/components/common/mês-bar";
import Tipo from "@/components/common/tipo";
import { Button } from "@/components/ui/button";
import { PermissõesRoutes } from "@/constant/data";
import Histórico from "./Histórico";
const MinhasFaturas = () => (
  <div className=" bg-white  rounded-14 px-5 py-6">
    <div className=" flex pl-4 pb-4 items-center gap-3">
      <h3 className=" text-lg sm:text-xl font-semibold text-black">
        Minhas faturas
      </h3>
      <RecipeIcon />
    </div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead className=" text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>00/00/0000</TableCell>
          <TableCell className="text-right">R$ 00,00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>00/00/0000</TableCell>
          <TableCell className="text-right">R$ 00,00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>00/00/0000</TableCell>
          <TableCell className="text-right">R$ 00,00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

const SolicitarVia = () => (
  <div className="bg-white  rounded-14 px-5 py-6">
    <div className=" flex pl-4 pb-4 items-center gap-3">
      <h3 className=" text-lg sm:text-xl font-semibold text-black">
        Solicitar 2ª via
      </h3>
      <ImportFileIcon />
    </div>
    <div className="grid gap-6 grid-cols-11">
      <div className="col-span-5">
        <Mesbar />
      </div>
      <div className="col-span-6">
        <Tipo />
      </div>
    </div>
    <div className=" pt-6">
      <Button className=" rounded-xl px-6" variant={"secondary"}>
        Buscar
      </Button>
    </div>
  </div>
);
const Financeiro = () => {
  return (
    <>
      <div className=" space-y-5 ">
        <MainNavbar title="Financeiro" />
        <div className="  space-y-5">
          <OverView />
          <SubHeader
            href="Financeiro"
            buttonsData={PermissõesRoutes}
            name="Financeiro"
          />

          <div>
            <div className="grid grid-rows-1 gap-6 lg:grid-cols-8">
              <div className=" lg:col-span-3">
                <MinhasFaturas />
              </div>
              <div className=" bg-white  rounded-14 lg:col-span-5">
                <SolicitarVia />
              </div>
            </div>
          </div>
          {/* <Histórico /> */}
          <div className=" pb-10">
            <div className=" flex pl-4 pb-4 items-center gap-3">
              <h3 className=" text-lg sm:text-xl font-semibold text-black">
                Histórico
              </h3>
              <FileAdd />
            </div>
            <Histórico />
          </div>
        </div>
      </div>
    </>
  );
};

export default Financeiro;
