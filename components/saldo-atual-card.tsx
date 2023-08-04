import { TlDollar } from "@/assets/icons";
import Image from "next/image";

const SaldoAtualCard = () => {
  return (
    <div
      style={{
        background: "linear-gradient(347deg, #74EEAE 0%, #00A24D 100%)",
      }}
      className=" rounded-xl flex justify-between relative"
    >
      <div className=" space-y-4 text-white py-5 px-5">
        <div>
          <span className=" text-white text-sm font-bold">R$</span>
          <h2 className=" text-[5.625em] font-bold leading-none">0,00</h2>
        </div>
        <div className=" space-y-4">
          <div className="s w-[45px] h-[5px] bg-[#74EEAE] rounded-xl"></div>
          <p className=" text-sm font-normal">
            Saldo para distribuição entre <br />
            colaboradores e parceiros
          </p>
          <button className=" border rounded-xl hover:bg-opacity-80 px-10 py-2.5 flex items-center bg-white text-[#1A932E] border-border-green-dark text-base font-bold gap-3">
            Adicionar saldo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.167368 10.7464C0.390524 10.9634 0.752333 10.9634 0.97549 10.7464L5.54692 6.30196C5.65408 6.19777 5.71429 6.05646 5.71429 5.90912C5.71429 5.76178 5.65408 5.62047 5.54692 5.51628L0.97549 1.07184C0.752333 0.854879 0.390524 0.854879 0.167368 1.07184C-0.0557892 1.28879 -0.0557892 1.64055 0.167368 1.85751L4.33474 5.90912L0.167368 9.96073C-0.0557892 10.1777 -0.0557892 10.5294 0.167368 10.7464Z"
                fill="#1A932E"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Image className=" w-full h-full" src={TlDollar} alt="TlDollar" />
      </div>
      <div className=" absolute left-4 -top-[5%]">
        <button className=" bg-[#74EEAE] rounded-xl h-[36px] text-[#46674B] font-bold grid place-items-center px-7">
          Saldo atual
        </button>
      </div>
    </div>
  );
};

export default SaldoAtualCard;
