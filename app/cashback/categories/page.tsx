import OverView from "@/components/common/overview/overviews";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CashbackRoutess } from "@/constant/data";
import { MdSave } from "react-icons/md";

const CashBack = () => {
  return (
    <>
      <div className=" space-y-5  pb-6">
        <MainNavbar title="Cashback" />
        <div className="  space-y-5">
          <OverView />
          <SubHeader
            href="cashback"
            buttonsData={CashbackRoutess}
            name="Categorias"
          />
        </div>
        <div className=" space-y-4 rounded-14 lg:max-w-[550px] bg-white shadow-btn-shadow p-2 sm:p-5">
          <h3 className=" text-xl font-semibold">
            Aqui você pode adicionar uma categoria
          </h3>
          <Input placeholder="Adicionar Categoria" />
          <Button variant={"secondary"}>
            <MdSave size={20} className="text-white" />{" "}
            <span className=" text-white">Adicionar</span>
          </Button>
          <div>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashBack;
