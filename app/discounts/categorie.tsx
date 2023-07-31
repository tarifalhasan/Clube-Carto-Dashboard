import { CategoriesData } from "@/assets/categorias";
import Image from "next/image";

const Categorie = () => {
  return (
    <div className=" pt-5 grid  gap-6 lg:gap-16 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2">
      {CategoriesData.map((item, index) => (
        <div
          className=" h-[140px] grid place-items-center  bg-[#FFFDFD] shadow-5xl rounded-14"
          key={item.id}
        >
          <Image
            className=" block mx-auto w-[]"
            width={60}
            height={73}
            src={item.image}
            alt={item.title}
          />
          <p className=" text-sm text-center">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categorie;
