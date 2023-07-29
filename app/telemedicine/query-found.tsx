import { Button } from "@/components/ui/button";
import ClinicCard from "../health/ClinicCard";

const QueryFound = () => {
  return (
    <div>
      <h2 className=" text-xl">Gerar link consulta</h2>
      <div className=" bg-white mt-6  rounded-14 p-5 flex  flex-wrap gap-5 items-center justify-center lg:justify-between">
        <div>
          <ClinicCard
            name="Tarif Lita"
            location="Av. Altamiro Avelino Soares, 1061 - Castelo, Belo Horizonte - MG, 31330-000"
            Especialidades="Estado - Cidade"
          />
        </div>
        <Button variant={"secondary"} className=" text-lg gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={27}
            viewBox="0 0 27 27"
            fill="none"
          >
            <g clipPath="url(#clip0_102_24465)">
              <path
                d="M21.375 0H14.625C11.5234 0 9 2.52338 9 5.625V12.375C9 15.4766 11.5234 18 14.625 18H21.375C24.4766 18 27 15.4766 27 12.375V5.625C27 2.52338 24.4766 0 21.375 0ZM24.75 12.375C24.75 14.2358 23.2358 15.75 21.375 15.75H14.625C12.7642 15.75 11.25 14.2358 11.25 12.375V5.625C11.25 3.76425 12.7642 2.25 14.625 2.25H21.375C23.2358 2.25 24.75 3.76425 24.75 5.625V12.375ZM18 21.375C18 24.4766 15.4766 27 12.375 27H5.625C2.52338 27 0 24.4766 0 21.375V14.625C0 11.5234 2.52338 9 5.625 9C6.24713 9 6.75 9.504 6.75 10.125C6.75 10.746 6.24713 11.25 5.625 11.25C3.76425 11.25 2.25 12.7642 2.25 14.625V21.375C2.25 23.2358 3.76425 24.75 5.625 24.75H12.375C14.2358 24.75 15.75 23.2358 15.75 21.375C15.75 20.754 16.2529 20.25 16.875 20.25C17.4971 20.25 18 20.754 18 21.375Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_102_24465">
                <rect width={27} height={27} fill="white" />
              </clipPath>
            </defs>
          </svg>
          Copiar para área de transferência
        </Button>
      </div>
    </div>
  );
};

export default QueryFound;
