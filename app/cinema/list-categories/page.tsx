import { TlTicket } from "@/assets/icons";
import SubHeader from "@/components/sub-header";
import { cinema_list_Categories_data, cinema_routes } from "@/constant/cinema";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ListCategories = () => {
  return (
    <div>
      <SubHeader
        buttonsData={cinema_routes}
        href="cinema"
        title="Listar categorias"
      />
      <div className=" pt-10 ">
        <h2 className=" text-card-title font-normal">Veja as categorias de</h2>
        <h2 className="text-card-title ">filmes disponíveis!</h2>
      </div>
      <div className=" py-9 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center  gap-5 lg:flex-wrap">
        {cinema_list_Categories_data.map((data, index) => (
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
  );
};

export default ListCategories;
