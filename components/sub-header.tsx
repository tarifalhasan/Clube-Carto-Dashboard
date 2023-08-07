"use client";
import { Button } from "@/components/ui/button";
import { ButtonGroupType } from "@/interfaces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface Props {
  href: string;
  name?: string;
  buttonsData?: ButtonGroupType[];
  title?: string;
}

const SubHeader: React.FC<Props> = ({ href, name, buttonsData, title }) => {
  const router = useRouter();

  const handleClickLink = (path: string) => {
    router.push(path);
  };

  return (
    <div className="hidden md:flex  justify-between items-center gap-3 ">
      <div className="md:max-w-[18%] flex items-center cursor-pointer">
        <Link href={href}>
          <MdKeyboardArrowLeft size={24} />
        </Link>
        <h2 className=" text-lg text-skin-gray-950 font-semibold">
          {name || title}
        </h2>
      </div>
      <div className=" flex flex-wrap gap-3">
        {buttonsData?.map((data, index) => (
          <Button
            onClick={() => handleClickLink(data.href)}
            key={index}
            variant={"primary"}
            className="flex items-center"
          >
            <span className="text-sm">{data.name}</span>
            <IoIosArrowForward />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
