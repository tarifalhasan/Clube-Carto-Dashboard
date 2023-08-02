import SubHeader from "@/components/sub-header";
import { FilmesListData, cinema_routes } from "@/constant/cinema";
import Image from "next/image";

const Films = () => {
  return (
    <>
      <SubHeader title="Filmes" href="cinema" buttonsData={cinema_routes} />
      <div>
        <h2 className="text-lg py-5 font-semibold">Em cartaz</h2>
        <div className=" gap-10 grid sm:grid-cols-2 lg:grid-cols-5">
          {FilmesListData.Emcartaz.map((data) => (
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
    </>
  );
};

export default Films;
