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
    <div className=" flex items-center gap-4">
      <div className="flex items-center">
        <Link href={href}>
          <MdKeyboardArrowLeft size={24} />
        </Link>
        <h2 className=" text-5xl text-skin-gray-950 font-normal">
          {name || title}
        </h2>
      </div>
      <div className=" hidden lg:flex items-center gap-4">
        {buttonsData?.map((data, index) => (
          <Button
            onClick={() => handleClickLink(data.href)}
            key={index}
            variant={"primary"}
          >
            <span>{data.name}</span>
            <IoIosArrowForward />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
