import OverView from "@/components/common/overview/overviews";
import SubHeader from "@/components/sub-header";

const Notifications = () => {
  const routes = [
    {
      name: "Email",
      href: "notifications",
    },
    {
      name: "Push",
      href: "notifications",
    },
    {
      name: "SMS",
      href: "notifications",
    },
    {
      name: "Chat",
      href: "notifications",
    },
  ];
  return (
    <div className=" space-y-5">
      <OverView />
      <SubHeader
        buttonsData={routes}
        title="Notificações"
        href="notifications"
      />

      {/* notifications  start */}

      {/* notifications  end */}
    </div>
  );
};

export default Notifications;
