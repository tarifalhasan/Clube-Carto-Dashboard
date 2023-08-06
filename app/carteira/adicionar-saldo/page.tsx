import { PixIcon } from "@/assets/icons";
import {
  FileInvoiceDoller,
  LinkedIcon,
  TlMoneyCheck,
} from "@/assets/svg/icons";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { carteira_routes } from "@/constant/carteira";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const AdicionarSaldo = () => {
  return (
    <>
      <SubHeader
        title="Adicionar saldo"
        href="adicionar-saldo"
        buttonsData={carteira_routes}
      />
      <div className=" text-4xl">Adicione saldo a sua conta</div>
      <div className="shadow-btn-shadow space-y max-w-[697px] bg-white px-6 py-6 rounded-xl">
        <p className="s text-xs">
          Informe o valor e preencha os dados para adicionar saldo a sua conta
        </p>
        <h2 className="text-4xl font-semibold">
          Informe o valor que deseja adicionar
        </h2>
        <div>
          <label
            className="text-xs font-light text-[#292D32]"
            htmlFor="DigiteoValor "
          >
            Digite o Valor{" "}
          </label>
          <Input
            placeholder="0,00"
            className=" border border-border-green-light"
            type="number"
          />
        </div>
        <h2 className="text-xl py-3 font-semibold">
          Selecione como deseja realizar o pagamento
        </h2>
        <div className="flex items-center gap-4">
          <Button
            icon={<FileInvoiceDoller />}
            className=" text-skin-gray-900  h-[63px] text-xs lg:text-lg  font-semibold"
            variant={"primary"}
          >
            Boleto bancário
          </Button>
          <Button
            icon={<Image src={PixIcon} alt="pixICon" />}
            className=" text-skin-gray-900  h-[63px] text-xs lg:text-lg  font-semibold"
            variant={"primary"}
          >
            Pix
          </Button>
        </div>
        <div className="flex flex-wrap pt-5 items-center gap-4">
          <Button
            icon={<LinkedIcon />}
            className=" text-skin-gray-900  h-[63px] text-xs lg:text-lg  font-semibold"
            variant={"primary"}
          >
            Link de pagamento
          </Button>
          <Button
            icon={<TlMoneyCheck />}
            className=" text-skin-gray-900  h-[63px] text-xs lg:text-lg  font-semibold"
            variant={"primary"}
          >
            Cartão de crédito
          </Button>
        </div>
        <Button
          className=" text-[#353A40] my-5 rounded-full  gap-2   text-xs lg:text-lg  font-semibold"
          variant={"secondary"}
        >
          Cartão de crédito <MdOutlineArrowForwardIos />
        </Button>
      </div>
    </>
  );
};

export default AdicionarSaldo;
