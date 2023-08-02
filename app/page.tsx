import MainNavbar from "@/components/main-navbar/main-navbar";

export default async function Home() {
  return (
    <div className=" ">
      <div className=" space-y-5 ">
        <MainNavbar title="Associados" />
        <div className=" py-10">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}
