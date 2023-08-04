import Carosuel from "@/components/Carosuel";
import SubHeader from "@/components/sub-header";
import { products_routes } from "@/constant/products";
import { getProduct, getProducts } from "@/lib/getProducts";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { FaArrowRightLong, FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  const products = await getProducts();

  const similarCategoryProducts = products.filter(
    (pd) => pd.category === product.category
  );

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1687838276983-1e09d460e2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1686329144238-437bdee50be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1686940264878-222720c9ce3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1686940081950-aaf32270d799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1687838276983-1e09d460e2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <SubHeader
        title="Ver produto"
        href="produtos"
        buttonsData={products_routes}
      />
      <div
        style={{
          borderRadius: "12px 12px 0px 0px",
          background:
            "linear-gradient(342deg, #000606 0%, #569A59 100%, #74EEAE 100%)",
        }}
        className=" sm:h-[332px]  h-full py-5"
      >
        <div className=" pt-24 flex justify-between gap-10 flex-wrap  items-end pr-6 pl-6 lg:pl-16">
          <div className=" flex flex-col  sm:flex-row  gap-10">
            <div
              style={{
                background: "linear-gradient(343deg, #292D32 0%, #569A59 100%)",
              }}
              className=" shadow-btn-shadow w-[108px] h-[108px] rounded-2xl grid place-items-center"
            >
              <Image
                src={product.image}
                width={108}
                height={108}
                className=" w-full h-full"
                alt={product.title}
              />
            </div>
            <div className=" space-y-2">
              <h2 className="text-white text-3xl font-semibold">
                {product.title}
              </h2>
              <div className="flex gap-2 text-white items-center">
                <IoHomeOutline size={24} />
                <p className=" text-lg font-light">nome da empresa</p>
              </div>
              <div className="flex gap-2 text-white items-center">
                <MdOutlineDashboardCustomize size={24} />
                <p className=" text-lg font-light">{product.category}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 text-white items-center">
                  <FaRegCirclePlay size={24} />
                  <p className=" text-lg font-light">ver vídeo</p>
                </div>
                <div className="flex gap-2 text-white items-center">
                  <FaRegBookmark size={24} />
                  <p className=" text-lg font-light">salvar produto</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              style={{ boxShadow: "0px 0px 9px 0px rgba(116, 238, 174, 0.50)" }}
              className=" px-14 py-2 bg-[#74EEAE] rounded-[18.5px] text-base font-bold"
            >
              Obter
            </button>
          </div>
        </div>
      </div>
      <div className="grid  gap-10 pb-8 grid-cols-12">
        <div className="col-span-12 xl:col-span-7 space-y-4">
          <div className=" relative">
            <Carosuel data={slides} />
          </div>
          <div>
            <div className=" inline-flex items-center gap-2">
              <h2 className=" text-4xl font-semibold text-[#569A59]">
                Descrição
              </h2>
              <FaArrowRightLong size={29} className="text-[#569A59]" />
            </div>
            <p className=" text-sm text-[#292D32] font-semibold">
              {product.description}
            </p>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5">
          <div className=" rounded-2xl bg-white shadow-btn-shadow p-6">
            <div className=" border-b  border-secondary pb-3 w-full flex justify-between items-center">
              <p className=" text-secondary font-semibold text-sm">
                Contato da empresa
              </p>
              <IoIosArrowDown size={24} className=" text-secondary" />
            </div>
            <div className=" py-6">
              <h2 className="text-secondary font-semibold text-sm">
                Produtos semelhantes
              </h2>
              <div className=" pt-4 space-y-4">
                {similarCategoryProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className=" flex  gap-3 items-center">
                    <div>
                      <div className=" w-[101px] h-[101px] rounded-2xl ">
                        <Image
                          src={product.image}
                          className=" w-full h-full "
                          width={101}
                          height={101}
                          alt={product.title}
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className=" text-sm font-semibold">
                        {product.title}
                      </h2>
                      <p className=" text-xs font-normal">Nome da empresa</p>
                      <p className=" text-xs font-normal">{product.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
