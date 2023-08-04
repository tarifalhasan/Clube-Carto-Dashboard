import SubHeader from "@/components/sub-header";
import { Input } from "@/components/ui/input";
import { carteira_routes } from "@/constant/carteira";

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
          <Input
            placeholder="0,00"
            className=" border border-border-green-light"
            type="number"
          />
          <Input
            placeholder="0,00"
            className=" border border-border-green-light"
            type="number"
          />
        </div>
      </div>
    </>
  );
};

export default AdicionarSaldo;
