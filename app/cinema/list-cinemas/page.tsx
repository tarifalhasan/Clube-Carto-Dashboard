"use client";
import SearchBar from "@/components/common/SearchBar";
import SubHeader from "@/components/sub-header";
import { ListarCinemasData, cinema_routes } from "@/constant/cinema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useState } from "react";
const formSchema = z.object({
  cinemaName: z.string(),
  cinemaLocationOn: z.string(),
});
const ListarCinemas = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredCinemas, setFilteredCinemas] = useState(ListarCinemasData);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cinemaName: "",
      cinemaLocationOn: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError("");

    // Filter the data based on the search fields
    const { cinemaName, cinemaLocationOn } = values;
    const filteredData = ListarCinemasData.filter((cinema) => {
      const nameMatch = cinema.name
        .toLowerCase()
        .includes(cinemaName.toLowerCase());
      const locationMatch = cinema.location
        .toLowerCase()
        .includes(cinemaLocationOn.toLowerCase());
      return nameMatch && locationMatch;
    });

    // Update the filteredCinemas state with the filtered data
    setFilteredCinemas(filteredData);

    // Check if no results are found
    if (filteredData.length === 0) {
      setError("No results found.");
    }

    setLoading(false);
  }
  return (
    <>
      <SubHeader
        buttonsData={cinema_routes}
        href="cinema"
        title="Listar cinemas"
      />
      <div className=" py-6">
        <h2 className=" text-xl">Pesquise o cinema e a região desejada</h2>
        <div className="bg-white px-5 py-6 rounded-xl ">
          <h4 className="py-2 text-lg sm:text-xl font-semibold  text-text-green">
            Buscar cinema
          </h4>
          <Form {...form}>
            <form className=" w-full" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex w-full flex-wrap lg:flex-nowrap items-center gap-6">
                <FormField
                  control={form.control}
                  name="cinemaName"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormControl className=" w-full">
                        <SearchBar
                          placeholder="digite o nome do cinema"
                          className=" w-full"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cinemaLocationOn"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormControl className=" w-full">
                        <SearchBar
                          placeholder="digite o nome do cinema"
                          className=" w-full"
                          {...field}
                          icon={
                            <CiLocationOn
                              size={25}
                              className=" text-[#74EEAE]"
                            />
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant={"secondary"}
                  className=" rounded-full px-7 text-black lg:text-xl bg-[#74EEAE] font-semibold"
                >
                  Pesquisar
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid md:grid-cols-2 sm:px-5 gap-6 py-6">
            {filteredCinemas.map((data, index) => (
              <div
                key={data.id}
                className=" grid  h-auto sm:h-[120px] sm:grid-cols-2  gap-y-3  p-5 place-items-center shadow-btn-shadow bg-white  rounded-xl"
              >
                <div>
                  <Image
                    className=" max-h-[90.681px]"
                    src={data.image}
                    alt={data.name}
                  />
                </div>
                <div>
                  <p className=" text-sm font-semibold">{data.name}</p>
                  <p className=" max-w-[85%] text-sm font-normal">
                    {data.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListarCinemas;
