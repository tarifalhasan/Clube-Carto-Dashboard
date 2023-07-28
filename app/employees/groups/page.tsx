"use client";
import SearchBar from "@/components/common/SearchBar";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

// Define the type for the group data
type Group = {
  id: string;
  name: string;
  category: string;
  permissions: string;
};

const Grupos = () => {
  // Initialize the state with an empty array for the groups
  const [groups, setGroups] = useState<Group[]>([]);
  const [searchGroups, setSearchGroups] = useState("");
  const [searchResults, setSearchResults] = useState<Group[]>([]);

  const onChangeSearchGroups = (value: string) => {
    setSearchGroups(value);
    setSearchResults(
      groups.filter((group) =>
        group.name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  // Dummy data for the initial groups
  const initialGroups: Group[] = [
    {
      id: "1",
      name: "Group 1",
      category: "Category 1",
      permissions: "Permission 1",
    },
    {
      id: "2",
      name: "Group 2",
      category: "Category 2",
      permissions: "Permission 2",
    },
    // Add more groups here if needed
  ];
  // When the component mounts, set the initial groups
  useEffect(() => {
    setGroups(initialGroups);
    setSearchResults(initialGroups);
  }, []);

  // Function to handle the "Adicionar" button click
  const handleAdicionarClick = () => {
    setSearchResults(
      groups.filter((group) =>
        group.name.toLowerCase().includes(searchGroups.trim().toLowerCase())
      )
    );
  };

  return (
    <div className=" space-y-5">
      <MainNavbar title="Funcionários" />
      <SubHeader name="Grupos" href="/employees" />
      <div className=" space-y-5 pb-1">
        <div className=" space-y-4 bg-white rounded-2xl p-5 lg:p-8">
          <h3 className=" text-4xl">Selecionar funcionário</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" flex flex-col lg:flex-row lg:items-center gap-4"
          >
            <div className=" w-full lg:w-[565px]">
              <SearchBar
                label="Nome do grupo"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  onChangeSearchGroups(event.target.value)
                }
                value={searchGroups}
              />
            </div>
            <div className="">
              <div className=" py-2 text-white">2</div>
              <Button
                className="  gap-2 text-base !lg:text-4xl font-semibold"
                variant={"secondary"}
                type="submit"
                onClick={handleAdicionarClick}
              >
                <AiOutlinePlusCircle size={20} />
                Adicionar
              </Button>
            </div>
          </form>
        </div>
        <div className=" mt-10 space-y-4 bg-white rounded-2xl p-5 lg:p-8 ">
          <div className=" py-2 inline-flex items-center gap-2">
            <h2 className=" text-base lg:text-4xl">Veja todos os Grupos</h2>
          </div>
          <Table>
            <TableCaption>A list of Groups.</TableCaption>
            <TableHeader className="s bg-[#1A932E2E] ">
              <TableRow>
                <TableHead className=" text-xs sm:text-base font-normal">
                  Nome dos Grupos
                </TableHead>

                <TableHead className="text- text-xs sm:text-base">
                  Categoria
                </TableHead>

                <TableHead className="text-right text-xs sm:text-base">
                  Permissões
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {searchResults.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-lg">
                    Result not found
                  </TableCell>
                </TableRow>
              ) : (
                searchResults.map((group) => (
                  <TableRow key={group.id}>
                    <TableCell className="text-xs sm:text-base">
                      {group.name}
                    </TableCell>
                    <TableCell className="text-xs sm:text-base">
                      {group.category}
                    </TableCell>
                    <TableCell className="text-right text-xs sm:text-base">
                      {group.permissions}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Grupos;
