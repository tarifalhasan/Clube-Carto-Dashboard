import Schedule from "@/components/Schedule";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";

const Recentes = () => {
  return (
    <div className=" space-y-5 pb-6">
      <MainNavbar title="Saúde" />
      <SubHeader href="health" name="Recentes" />

      <div className=" w-full lg:max-w-[55%]">
        <Schedule columnDirection="column" />
      </div>
    </div>
  );
};

export default Recentes;
