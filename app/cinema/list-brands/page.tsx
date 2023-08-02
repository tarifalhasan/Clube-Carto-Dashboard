import SubHeader from "@/components/sub-header";
import { ListarMarcasData, cinema_routes } from "@/constant/cinema";
import Image from "next/image";

const ListarMarcas = () => {
  return (
    <>
      <SubHeader
        buttonsData={cinema_routes}
        href="cinema"
        title="Listar marcas"
      />
      <div className="grid py-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full xl:max-w-[90%] gap-7">
        {ListarMarcasData.map((data) => (
          <div
            key={data.id}
            className=" grid rounded-xl shadow-btn-shadow place-items-center py-5 px-6"
            style={{ background: `${data.bgColor}` }}
          >
            <Image src={data.image} alt="dasdasdsa" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListarMarcas;
