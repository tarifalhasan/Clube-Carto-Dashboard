import CanaisCard from "@/components/common/notifications/CanaisCard";
import Card from "@/components/common/notifications/Card";
import SingleButton from "@/components/common/notifications/SingleButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Notifications = () => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-semibold my-3">Visão geral</p>
        <p className="my-3 text-sm">Últimos 30 dias</p>
      </div>
      <div className="flex gap-3">
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
        <div className="w-[30%] flex items-center hover:text-blue-500 cursor-pointer">
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

      {/* canis start  */}
      <div className="my-8">
        <h1 className="font-semibold">Canais</h1>
        <p className="text-sm text-gray-600">
          Escolha um canal e crie suas notificações
        </p>

        <div className="py-3 flex gap-5">
          <CanaisCard name="Email" />
          <CanaisCard name="Push" />
          <CanaisCard name="SMS" />
          <CanaisCard name="Chat" />
        </div>
      </div>
      {/* canis end  */}
    </div>
  );
};

export default Notifications;