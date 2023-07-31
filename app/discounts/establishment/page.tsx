import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { DescontosSub } from "@/constant/data";
import Link from "next/link";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { FaHotjar } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdSave } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { SlLock, SlStar } from "react-icons/sl";

const Discounts = () => {
  return (
    <div className="space-y-5 pb-7">
      <MainNavbar title="Descontos" />

      <SubHeader
        href="discounts"
        buttonsData={DescontosSub}
        name="Estabelecimento"
      />
      <div className=" flex flex-col lg:flex-row gap-6 bg-white rounded-2xl p-5">
        <div className=" lg:basis-1/2  w-full  ">
          <h2 className=" text-xl pb-5 font-semibold">
            Faça a configuração dos dados do Estabelecimento
          </h2>
          <div className={`grid   gap-6`}>
            <div className="shadow-5xl space-y-3 bg-white p-4 rounded-2xl">
              <div>
                <BiShoppingBag size={60} className="text-[#569A59]" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className=" text-xl font-normal">
                  Adicionar <br /> estabelecimento
                </h3>

                <Link href={"add-establishment"}>
                  <Button variant={"secondary"} className=" gap-3">
                    <MdSave size={20} className="text-white " />{" "}
                    <span className=" text-white !text-base !font-semibold">
                      Adicionar
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className=" space-y-5">
              <Link
                href={"discounts/block"}
                className=" group  hover:bg-[#569A59] r shadow-5xl rounded-[10px] py-6 px-5 flex items-center justify-between"
              >
                <div className=" flex items-center gap-4">
                  <SlLock
                    className="text-[#569A59] group-hover:text-white"
                    size={45}
                  />
                  <span className="text-base group-hover:text-white">
                    Bloquear
                  </span>
                </div>

                <MdOutlineKeyboardArrowRight
                  className="group-hover:text-white"
                  size={25}
                />
              </Link>
              <Link
                href={"discounts/detaque-scroll"}
                className=" group hover:bg-[#569A59]  shadow-5xl rounded-[10px] py-6 px-5 flex items-center justify-between"
              >
                <span className=" flex items-center gap-4">
                  <SlStar
                    className="text-[#569A59] group-hover:text-white"
                    size={45}
                  />
                  <span className="text-base group-hover:text-white">
                    Destaque scroll
                  </span>
                </span>
                <MdOutlineKeyboardArrowRight
                  className="group-hover:text-white"
                  size={25}
                />
              </Link>
              <Link
                href={"discounts/Recent"}
                className=" group     shadow-5xl  hover:bg-[#569A59] rounded-[10px] py-6 px-5 flex items-center justify-between"
              >
                <div className=" flex items-center gap-4">
                  <RiErrorWarningLine
                    className="text-[#569A59] group-hover:text-white"
                    size={45}
                  />
                  <span className="text-base text-black group-hover:text-white">
                    Recentes
                  </span>
                </div>
                <MdOutlineKeyboardArrowRight
                  className="group-hover:text-white"
                  size={25}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="  lg:basis-1/2  w-full space-y-5">
          <h2 className="pb-6"></h2>
          <Link
            href={"discounts/list-establishment"}
            className=" group  hover:bg-[#569A59] r shadow-5xl rounded-[10px] py-6 px-5 flex items-center justify-between"
          >
            <div className=" flex items-center gap-4">
              <BiShoppingBag
                className="text-[#569A59] group-hover:text-white"
                size={45}
              />
              <span className="text-base group-hover:text-white">
                Listar Estabelecimento
              </span>
            </div>

            <MdOutlineKeyboardArrowRight
              className="group-hover:text-white"
              size={25}
            />
          </Link>
          <Link
            href={"discounts/most-used"}
            className=" group  hover:bg-[#569A59] r shadow-5xl rounded-[10px] py-6 px-5 flex items-center justify-between"
          >
            <div className=" flex items-center gap-4">
              <AiOutlineAppstoreAdd
                className="text-[#569A59] group-hover:text-white"
                size={45}
              />
              <span className="text-base group-hover:text-white">
                Mais utilizados
              </span>
            </div>

            <MdOutlineKeyboardArrowRight
              className="group-hover:text-white"
              size={25}
            />
          </Link>
          <Link
            href={"discounts/list-establishment"}
            className=" group  hover:bg-[#569A59] r shadow-5xl rounded-[10px] py-6 px-5 flex items-center justify-between"
          >
            <div className=" flex items-center gap-4">
              <FaHotjar
                className="text-[#569A59] group-hover:text-white"
                size={45}
              />
              <span className="text-base group-hover:text-white">
                Cadastrar Desconto
              </span>
            </div>

            <MdOutlineKeyboardArrowRight
              className="group-hover:text-white"
              size={25}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
