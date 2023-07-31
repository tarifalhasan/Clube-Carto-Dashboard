import dummyLogo from "@/assets/images/8011901.jpg";
import { CirclePlusIconSvg, SaveFileICon } from "@/assets/svg/icons";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import { SlStar } from "react-icons/sl";
const DetaqueScroll = () => {
  const Data = [
    {
      id: 1,
      logo: dummyLogo,
      link: "/defense",
      alt: "",
    },
    {
      id: 2,
      logo: dummyLogo,
      link: "/defense",
      alt: "",
    },
    {
      id: 3,
      logo: dummyLogo,
      link: "/defense",
      alt: "",
    },
    {
      id: 4,
      logo: dummyLogo,
      link: "/defense",
      alt: "",
    },
  ];

  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Desconto" />
      <SubHeader href="discounts" name="Detaque Scroll" />
      <div className=" bg-white rounded-14 shadow-5xl p-5">
        <div className=" flex items-center gap-3">
          <h2 className=" !font-normal text-lg lg:text-5xl">
            Destaque um estabelecimento no Scroll
          </h2>
          <SlStar size={25} className=" text-[#569A59] opacity-40" />
        </div>
        <div className="grid py-6    sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {Data.map((item, index) => {
            return (
              <div
                key={item.id}
                className="bg-white relative rounded-2xl overflow-hidden shadow-5xl "
              >
                <div className="flex items-center gap-3">
                  <Image
                    className=" w-full h-full object-cover"
                    src={item.logo}
                    alt={item.alt}
                  />
                </div>
                <div className=" mr-[1em] text-center w-[38px] absolute top-0 right-0 pr-5 h-[42px] bg-[#353A40] ">
                  <h2 className=" text-center text-5xl text-white pl-3">
                    {index + 1}
                  </h2>
                </div>
              </div>
            );
          })}
          <div className=" min-h-[244px] c w-full h-full relative rounded-2xl border border-dashed  ">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  id="addItem"
                  className=" flex justify-center items-center absolute w-full h-full"
                >
                  <CirclePlusIconSvg />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Upload Logo</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="upload_image" className="text-right">
                      Upload Image
                    </Label>
                    <Input
                      id="upload_image"
                      className="col-span-3"
                      type="file"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Button variant={"secondary"} className=" gap-3">
          <SaveFileICon /> Adicionar desconto
        </Button>
      </div>
    </div>
  );
};

export default DetaqueScroll;
