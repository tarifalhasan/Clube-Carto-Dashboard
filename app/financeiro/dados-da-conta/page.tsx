import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { FinanceiroRoutes } from "@/constant/data";
const DadosDaConta = () => {
  return (
    <div>
      <div className=" space-y-5 ">
        <MainNavbar title="Financeiro" />
        <div className="  space-y-5">
          <SubHeader
            href="financeiro"
            buttonsData={FinanceiroRoutes}
            name="Dados da conta"
          />
          <div className=" ">
            <div className="">
              <h2 className=" text-lg lg:text-4xl">
                Consulte as informações do seu perfil
              </h2>
              <p className=" text-base text-black font-normal">
                Aqui estão todos os dados do seu perfil de acesso na sua conta
              </p>
            </div>

            <div className=" space-y-8 my-10 bg-white p-6 rounded-14 lg:max-w-[60%]">
              <div className=" ">
                <h2 className=" text-xl font-semibold">Dados pessoais</h2>
                <ul className=" space-y-5 pt-4">
                  <li className="  pb-2 w-full text-base font-normal border-b-2 border-table-border inline-flex gap-5">
                    <span>Name</span>
                  </li>
                  <li className="  pb-2 w-full text-base font-normal border-b-2 border-table-border inline-flex gap-5">
                    <span>Data de nascimento</span>
                  </li>
                  <li className="  pb-2 w-full text-base font-normal border-b-2 border-table-border inline-flex gap-5">
                    <span>CPF/CNPJ</span>
                  </li>
                </ul>
              </div>
              <div className=" ">
                <h2 className=" text-xl font-semibold">Celular</h2>
                <ul className=" space-y-5 pt-4">
                  <li className="  pb-2 w-full text-base font-normal border-b-2 border-table-border inline-flex gap-5">
                    <span>Celular</span>
                  </li>
                  <li className="  pb-2 w-full text-base font-normal border-b-2 border-table-border inline-flex gap-5">
                    <span>E-mail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosDaConta;
