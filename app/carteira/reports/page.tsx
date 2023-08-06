import RelatóriosTableData from "@/components/common/carteira/report-table";
import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";

const Relatórios = () => {
  return (
    <>
      <SubHeader
        title="Relatórios"
        href="carteira"
        buttonsData={carteira_routes}
      />
      <div>
        <RelatóriosTableData />
      </div>
    </>
  );
};

export default Relatórios;
