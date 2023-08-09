import Emita from "@/components/common/emita uma/Emita";
import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";

function emita_uma_cobrança() {
  return (
    <div>
      <SubHeader
        href="/emita_uma"
        name="Emita uma cobrança"
        buttonsData={carteira_routes}
      />

      <div className="my-8">
        <Emita />
      </div>
      <p className="">,</p>
    </div>
  );
}

export default emita_uma_cobrança;
