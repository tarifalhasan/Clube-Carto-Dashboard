import { TlTicket } from "@/assets/icons";
import OverView from "@/components/common/overview/overviews";
import SubHeader from "@/components/sub-header";
import {
  FilmesListData,
  ListarMarcasData,
  cinema_list_Categories_data,
  cinema_routes,
} from "@/constant/cinema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Cinema = () => {
  return (
    <>
      <OverView />
      <SubHeader href="cinema" buttonsData={cinema_routes} name="Cinema" />
      <div>
        <div className=" py-9  lg:max-w-[95%] 2xl:max-w-[986px] w-full">
          <div className=" pb-2 flex items-center justify-between">
            <h2 className=" font-medium text-4xl">Categorias</h2>
            <Link
              className="text-primary items-center inline-flex"
              href={"list-categories"}
            >
              ver mais <MdKeyboardArrowRight />
            </Link>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center  gap-5 lg:flex-wrap">
            {cinema_list_Categories_data.slice(0, 5).map((data, index) => (
              <div
                key={data.id}
                className={cn(
                  " px-8  h-[96px] py-4   lg:min-w-[178px] border border-card-border rounded-xl shadow-btn-shadow",
                  index % 2 === 0 ? "bg-[#74EEAE]" : "bg-transparent"
                )}
              >
                <Image src={TlTicket} alt="ticket" />
                <h3 className="text-4xl font-bold">{data.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="   lg:max-w-[95%] 2xl:max-w-[986px] w-full">
          <div className=" pb-2 flex items-center justify-between">
            <h2 className=" font-medium text-4xl">Marcas</h2>
            <Link
              className="text-primary items-center inline-flex"
              href={"list-brands"}
            >
              ver mais <MdKeyboardArrowRight />
            </Link>
          </div>
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full xl:max-w-[95%] gap-7">
            {ListarMarcasData.slice(0, 4).map((data) => (
              <div
                key={data.id}
                className=" grid rounded-xl shadow-btn-shadow place-items-center px-6"
                style={{ background: `${data.bgColor}` }}
              >
                <Image src={data.image} alt="dasdasdsa" />
              </div>
            ))}
          </div>
        </div>
        <div className=" pt-16 gap-10 grid lg:grid-cols-2 pb-4">
          <div>
            <h2 className="text-lg py-5 font-semibold">Estréias</h2>
            <div className=" bg-[#FAFAFA] rounded-xl border p-5  border-border-green-light gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
              {FilmesListData.Estréias.map((data) => (
                <div key={data.id}>
                  <Image
                    className=" rounded-[17px] w-full h-full object-cover block mx-auto"
                    src={data.image}
                    alt={"movie"}
                  />
                  <div className=" py-2">
                    <h3 className=" text-base text-center font-normal">
                      {data.movieName}
                    </h3>
                    <p className=" max-w-[85%] mx-auto text-[14px] text-center text-[#979797]">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg py-5 font-semibold">Em breve</h2>
            <div className=" bg-[#FAFAFA] rounded-xl border p-5  border-border-green-dark gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
              {FilmesListData.Embreve.map((data) => (
                <div key={data.id}>
                  <Image
                    className=" rounded-[17px] w-full h-full object-cover block mx-auto"
                    src={data.image}
                    alt={"movie"}
                  />
                  <div className=" py-2">
                    <h3 className=" text-base text-center font-normal">
                      {data.movieName}
                    </h3>
                    <p className=" max-w-[85%] mx-auto text-[14px] text-center text-[#979797]">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cinema;
