"use client";
import SearchBar from "@/components/common/SearchBar";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  inputSearch: z.string(),
});

import { TaLockSVGIcon } from "@/assets/svg/icons";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoIosArrowForward } from "react-icons/io";
import { SlLock, SlLockOpen } from "react-icons/sl";
const BlockDiscount = () => {
  interface TypeDataList {
    name: string;
    lock: boolean;
  }

  const Data: TypeDataList[] = [
    {
      name: "Nome do estabelecimento",
      lock: true,
    },
    {
      name: "Nome do estabelecimento",
      lock: true,
    },
    {
      name: "Nome do estabelecimento",
      lock: false,
    },
    {
      name: "Nome do estabelecimento",
      lock: false,
    },
    {
      name: "Nome do test",
      lock: false,
    },
    {
      name: "Nome do estabelecimento",
      lock: false,
    },
    {
      name: "Nome do estabelecimento",
      lock: false,
    },
    {
      name: "Nome do estabelecimento",
      lock: true,
    },
  ];

  const [filteredPlans, setFilteredPlans] = useState(Data);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputSearch: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true); // Show loading indicator

    setTimeout(() => {
      // Filter the plansData based on the inputSearch value
      const filteredData = Data.filter((data) =>
        data.name.toLowerCase().includes(values.inputSearch.toLowerCase())
      );

      // Update the state with the filtered data
      setFilteredPlans(filteredData);
      setLoading(false); // Hide loading indicator once search is completed
    }, 1000);
  }

  return (
    <div className=" space-y-5">
      <MainNavbar title="Desconto" />
      <SubHeader href="discounts" name="Bloquear" />
      <div className="  bg-white rounded-2xl p-5 space-y-5">
        <div className="flex flex-wrap gap-6 items-center justify-between">
          <div>
            <h2 className=" text-xl lg:text-5xl !font-normal">
              Bloqueie e desbloqueie um estabelecimento
            </h2>
            <p className=" text-xl font-semibold">
              Pesquise e clique por um estabelecimento para bloquear ou
              desbloquear
            </p>
          </div>
          <TaLockSVGIcon />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 lg:max-w-[500px]"
          >
            <FormField
              control={form.control}
              name="inputSearch"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SearchBar
                      label="Busque um estabelecimento"
                      placeholder="digite o nome da especialidade"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant={"secondary"}
              className=" text-sm lg:text-base px-7"
            >
              Pesquisar
            </Button>
          </form>
        </Form>
        <div className=" ">
          {loading && <div>Loading...</div>}
          <ul className=" space-y-2 ">
            {filteredPlans.map((data, index) => (
              <li
                key={index}
                className={cn(
                  "bg-white rounded-xl  flex items-center justify-between p-4",

                  {
                    "shadow-5xl": index % 2 === 0,
                  }
                )}
              >
                <span>{data.name}</span>
                {data.lock ? (
                  <SlLock className="w-6 h-6  text-[#EE201C]" />
                ) : (
                  <SlLockOpen className="w-6 h-6 text-[#569A59]" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <span>1/5</span>
          <Button variant={"secondary"} className=" gap-3  font-semibold">
            <span className=" text-white">ver mais</span> <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlockDiscount;
