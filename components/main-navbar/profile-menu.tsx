import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiPower } from "react-icons/ci";
import { HiOutlineInboxStack } from "react-icons/hi2";
const ProfileMenu = () => {
  return (
    <div className=" flex items-center">
      <Menubar className=" border-none ">
        <MenubarMenu>
          <MenubarTrigger className="search-bar rounded-full border-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="  hidden lg:block text-base font-normal  text-skin-gray-900">
              Nome do Usuário
            </span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <CgProfile size={24} />
              <span className=" ml-2 text-base">My Profile</span>
            </MenubarItem>
            <MenubarItem>
              <AiOutlineSetting size={24} />
              <span className=" ml-2 text-base">Edit Profile</span>
            </MenubarItem>
            <MenubarItem>
              <HiOutlineInboxStack size={24} />
              <span className=" ml-2 text-base">Inbox</span>
            </MenubarItem>
            <MenubarItem>
              <BiHelpCircle size={24} />
              <span className=" ml-2 text-base">Help</span>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <CiPower size={24} />
              <span className=" ml-2 text-base">Logout</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default ProfileMenu;
