import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { CashbackRoutess } from "@/constant/data";
import ListOfEstablishments from "../list-of-establishments";

const ListCashback = () => {
  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Cashback" />
      <SubHeader name="Lista" buttonsData={CashbackRoutess} href="cashback" />
      <div>
        <ListOfEstablishments />
      </div>
    </div>
  );
};

export default ListCashback;
