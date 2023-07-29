"use client";
import SearchBar from "@/components/common/SearchBar";
import MainNavbar from "@/components/main-navbar/main-navbar";
import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { plansData } from "@/constant/plans-data";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  inputSearch: z.string(),
});

const ActivePlans = () => {
  const [filteredPlans, setFilteredPlans] = useState(plansData);
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
      const filteredData = plansData.filter((data) =>
        data.name.toLowerCase().includes(values.inputSearch.toLowerCase())
      );

      // Update the state with the filtered data
      setFilteredPlans(filteredData);
      setLoading(false); // Hide loading indicator once search is completed
    }, 1000);
  }

  return (
    <div className=" space-y-5 pb-7">
      <MainNavbar title="Telemedicina" />
      <SubHeader name="Listar especialidades" href="telemedicine" />

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
                    label="Busque uma especialidade"
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
      {loading && <div>Loading...</div>}
      <div className=" w-full gap-5 lg:max-w-[80%] grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
        {filteredPlans.map((data) => (
          <div
            className=" p-3  h-[106px] bg-[#4DBE83] rounded-lg"
            key={data.id}
          >
            <Image
              className=" w-[66.688px] h-[63.123px] object-contain  block mx-auto"
              src={data.icon}
              alt={data.name}
            />
            <h3 className="  text-center font-medium text-base">
              Anestesiologia
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivePlans;
