import MinhasTaxasDiv from "@/components/common/carteira/MinhasTaxasDiv";
import SubHeader from "@/components/sub-header";

function MinhasTaxas() {
  return (
    <div>
      <SubHeader href="/minhas_taxas" name="Minhas taxas" buttonsData={[]} />

      <MinhasTaxasDiv />
    </div>
  );
}

export default MinhasTaxas;
