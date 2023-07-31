"use client";
import { HotSellIcon } from "@/assets/svg/icons";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { MdSave } from "react-icons/md";
import * as z from "zod";

const formSchema = z.object({
  Valor: z.string(),
  Título: z.string(),
  Regra: z.string(),
});
const RegisterDiscounts = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Valor: "",
      Título: "",
      Regra: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className=" space-y-5">
      <MainNavbar title="Descontos" />
      <SubHeader name="Cadastrar Descontos" href="discounts" />
      <div className=" bg-white w-full  max-w-full  lg:max-w-[540px] p-5 rounded-2xl shadow-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className=" text-xl font-semibold">
              Preencha os dados para <br /> Cadastrar um desconto
            </h2>
          </div>
          <HotSellIcon />
        </div>
        <div className=" pt-4 space-y-4">
          <p className=" text-xl">Desconto 1</p>{" "}
          <Form {...form}>
            <form className=" space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className=" grid gap-6">
                <FormField
                  control={form.control}
                  name="Valor"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Valor placeholder="Valor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-6 grid-cols-1">
                <FormField
                  control={form.control}
                  name="Título"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="sobre" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Regra"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea {...field} placeholder="regra geral" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" variant={"secondary"}>
                <MdSave size={20} className="text-white" />{" "}
                <span className=" text-white">Adicionar</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterDiscounts;

interface Props {
  className?: string;
}

const Valor: React.FC<
  Props & Omit<InputHTMLAttributes<HTMLInputElement>, "label">
> = ({ className, ...props }) => {
  return (
    <div className={`w-full`}>
      <div className=" search space-x-2">
        <input
          {...props}
          className=" text-base font-normal text-[#565656] w-full outline-none focus:outline-none border-none focus:border-none"
        />
        <div className="s w-[38px] text-xl font-bold h-9 text-white bg-[#46674B] rounded-lg shadow-sm grid place-items-center">
          %
        </div>
        <div className="s w-[38px] h-9  text-xl font-bold  text-white bg-[#569A59] rounded-lg shadow-sm grid place-items-center">
          $
        </div>
      </div>
    </div>
  );
};
