import MainNavbar from "@/components/main-navbar/main-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="  space-y-5">
      <MainNavbar title="Cinema" />
      {children}
    </section>
  );
}
