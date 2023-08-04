import { TlBrickets, TlLayer, TlUser, TlpiggyBank } from "@/assets/icons";
import SimplteCarteiraCard from "@/components/common/carteira/simplte-card";
import TransferCard from "@/components/common/carteira/transfer";
import OverView from "@/components/common/overview/overviews";
import SaldoAtualCard from "@/components/saldo-atual-card";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { carteira_routes } from "@/constant/carteira";

const Carteira = () => {
  return (
    <>
      <OverView />
      <SubHeader
        title="Carteira"
        href="carteira"
        buttonsData={carteira_routes}
      />
      <div className="grid  gap-6  lg:grid-cols-2">
        <SaldoAtualCard />
        <div className="grid  gap-6 sm:grid-cols-2">
          <TransferCard
            title="Creditar Colaborador"
            description="Distribuir seus créditos
           para seus colaboradores"
            image={TlUser}
          />
          <TransferCard
            title="Creditar Parceiro"
            description="Distribuir seus créditos
           para seus colaboradores"
            image={TlBrickets}
          />
        </div>
      </div>
      <div className=" justify-center items-center flex gap-4">
        <Button variant={"secondary"} className=" gap-1">
          Visão <b>mensal</b>
        </Button>
        <Button variant={"primary"} className=" px-6 gap-1">
          Visão <b>anual</b>
        </Button>
      </div>
      <div className="grid pb-7  gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SimplteCarteiraCard
          count={99}
          title="Cobranças"
          icon={TlpiggyBank}
          buttonText="Ver cobranças"
        />
        <SimplteCarteiraCard
          count={99}
          title="Produtos"
          icon={TlLayer}
          buttonText="Ver produtos"
        />
        <SimplteCarteiraCard
          count={`$99`}
          title="Ticket médio distribuído"
          buttonText="Ver cobranças"
        />
      </div>
    </>
  );
};

export default Carteira;
