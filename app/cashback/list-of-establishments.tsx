import image from "@/assets/images/Business-Opportunities-In-Brazil.jpg";
import { CirclePlusIcon, MostUsedIcon, RecentIcon } from "@/assets/svg/icons";
import SearchBar from "@/components/ui/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ListOfEstablishmentsData } from "@/constant/data";
import Image from "next/image";
import { FiLock } from "react-icons/fi";
const Establishments = () => {
  return (
    <div className="establish relative  overflow-hidden">
      <div className=" w-full max-h-[195px]">
        <Image
          src={image}
          className=" w-full h-full object-cover aspect-video"
          alt="Sdsd"
        />
      </div>
      <div className=" absolute  right-0  pr-4 top-2">
        <FiLock size={24} color="" className="text-[#46674B]" />
      </div>
      <h3 className=" pb-5 pt-6 text-base text-center text-[#797979]">
        NOME DO ESTABELECIMENTO
      </h3>
    </div>
  );
};

const ListOfEstablishments = () => {
  return (
    <div className="bg-white rounded-14 p-2 lg:p-4">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <h2 className="text-xl lg:text-5xl">Lista de estabelecimentos</h2>
        <ul className=" inline-flex  flex-wrap items-center gap-2 lg:gap-4">
          <li className=" inline-flex items-center gap-2 text-base">
            <RecentIcon /> <span>Recentes</span>
          </li>
          <li className=" inline-flex items-center gap-2 text-base">
            <MostUsedIcon /> <span>Mais utilizados</span>
          </li>
          <li className=" inline-flex items-center gap-2 text-base">
            <CirclePlusIcon /> <span>Destaque scroll</span>
          </li>
        </ul>
      </div>
      <div className="flex py-5 flex-wrap gap-4 items-center justify-between">
        <div>
          <SearchBar placeholder="pesquisar" />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />

            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              habilitados
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="indicações" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ListOfEstablishmentsData.map((data) => (
          <Establishments key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default ListOfEstablishments;
