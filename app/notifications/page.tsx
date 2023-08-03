import Card from "@/components/common/notifications/Card";
import SingleButton from "@/components/common/notifications/SingleButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Notifications = () => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-semibold my-3">Visão geral</p>
        <p className="my-3 text-sm">Últimos 30 dias</p>
      </div>
      <div className="flex gap-5">
        <Card
          name="Receita Total"
          amount="R$153.009,89"
          description="Aumento de 14% em relação ao mês passado"
        />
        <Card
          name="Multinível"
          amount="95 /100"
          description="Aumento de 14% em relação ao mês passado"
        />
        <Card
          name="Cashback"
          amount="R$14.349,04"
          description="Aumento de 14% em relação ao mês passado"
        />
        <Card
          name="Assossiados"
          amount="101 /120"
          description="Aumento de 14% em relação ao mês passado"
        />
      </div>

      {/* notifications  start */}

      <div className="py-5 flex justify-between">
        <div className="w-[30%] flex items-center">
          <ArrowBackIosIcon fontSize="small" />
          <p className="font-semibold text-xl">Notificações</p>
        </div>
        <div className="w-[70%] flex text-sm gap-2">
          <SingleButton name="Name" />
          <SingleButton name="Push" />
          <SingleButton name="SMS" />
          <SingleButton name="Chat" />
        </div>
      </div>
      {/* notifications  end */}
    </div>
  );
};

export default Notifications;
