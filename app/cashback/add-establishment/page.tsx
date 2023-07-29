"use client";
import OverView from "@/components/common/overview/overviews";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CashbackRoutess } from "@/constant/data";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { MdSave } from "react-icons/md";
import * as z from "zod";

const formSchema = z.object({
  establishmentName: z.string().min(3, "Name must be at least 3 characters"),
  category: z.string(),
  about: z.string(),
  rule: z.string(),
  state: z.string(),
  city: z.string(),
  telephone: z.string(),
  responsibleName: z.string(),
  responsiblePhone: z.string(),
  site: z.string(),
  instagram: z.string(),
  whatsapp: z.string(),
  is_it_a_virtual_store: z.string(),
  exclusive_partner: z.string(),
});

const CashBack = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      establishmentName: "",
      category: "",
      about: "",
      rule: "",
      state: "",
      city: "",
      telephone: "+88",
      responsibleName: "",
      responsiblePhone: "+88",
      site: "",
      instagram: "",
      whatsapp: "",
      is_it_a_virtual_store: "",
      exclusive_partner: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className=" space-y-5  pb-6">
        <MainNavbar title="Cashback" />
        <div className="  space-y-5">
          <OverView />
          <SubHeader
            href="cashback"
            buttonsData={CashbackRoutess}
            name="Categorias"
          />
        </div>
        <div className=" space-y-4 rounded-14  bg-white shadow-btn-shadow p-2 sm:p-5">
          <h3 className=" text-xl font-semibold">Cadastrar estabelecimento</h3>
          <Form {...form}>
            <form className=" space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className=" grid lg:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="establishmentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="nome do estabelecimento"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue>Categoria</SelectValue>
                              <SelectContent>
                                <SelectItem value="">
                                  Selecione uma categoria
                                </SelectItem>
                                <SelectItem value="Categoria 1">
                                  Categoria 1
                                </SelectItem>
                                <SelectItem value="Categoria 2">
                                  Categoria 2
                                </SelectItem>
                              </SelectContent>
                            </SelectTrigger>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid gap-6 grid-cols-2">
                <FormField
                  control={form.control}
                  name="about"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea {...field} placeholder="sobre" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rule"
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
              <div className=" grid lg:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="estado" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="cidade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nilphamari">
                              Nilphamari
                            </SelectItem>
                            <SelectItem value="Lalmonirhat">
                              Lalmonirhat
                            </SelectItem>
                            <SelectItem value="Rnagpur">Rnagpur</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid  lg:gap-x-6 grid-cols-3">
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="telefone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="responsibleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="nome responsável" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="responsiblePhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="telefone responsável" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-6 grid-cols-3">
                <FormField
                  control={form.control}
                  name="site"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="site" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="instagram" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue>Categoria</SelectValue>
                            <SelectContent>
                              <SelectItem value="">
                                Selecione uma categoria
                              </SelectItem>
                              <SelectItem value="Categoria 1">
                                Categoria 1
                              </SelectItem>
                              <SelectItem value="Categoria 2">
                                Categoria 2
                              </SelectItem>
                            </SelectContent>
                          </SelectTrigger>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-x-6 grid-cols-2">
                <FormField
                  control={form.control}
                  name="is_it_a_virtual_store"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue>é loja virtual?</SelectValue>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </SelectTrigger>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="is_it_a_virtual_store"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue>exclusive_partner</SelectValue>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </SelectTrigger>
                        </Select>
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
    </>
  );
};

export default dynamic(() => Promise.resolve(CashBack), {
  ssr: false,
});
