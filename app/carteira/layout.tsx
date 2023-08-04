import MainNavbar from "@/components/main-navbar/main-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" relative h-full pb-7  space-y-5 lg:space-y-8">
      <MainNavbar title="Carteira" />
      {children}
    </section>
  );
}
