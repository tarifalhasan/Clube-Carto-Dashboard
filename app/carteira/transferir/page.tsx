"use client";

import SubHeader from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { carteira_routes } from "@/constant/carteira";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TbArrowsShuffle2 } from "react-icons/tb";
import * as z from "zod";

const FormSchema = z.object({
  type: z.enum(["outra_titularidade", "mesma_titularidade"], {
    required_error: "You need to select a notification type.",
  }),
  agência: z.string(),
  conta: z.string(),
  nome_da_conta: z.string(),
  banco: z.string(),
});

const AdicionarSaldo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <>
      <SubHeader
        title="Transferir"
        href="transferir"
        buttonsData={carteira_routes}
      />
      <div className=" text-4xl flex items-center gap-2">
        Faça uma transferência{" "}
        <TbArrowsShuffle2 size={25} className="text-[#569A59]" />
      </div>
      <div className="shadow-btn-shadow space-y max-w-[697px] bg-white px-6 py-6 rounded-xl">
        <p className="s text-xs">Dados da contato de destino</p>
        <h2 className="text-4xl font-semibold">
          Informe para quem você quer transferir
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-2"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="mesma_titularidade" />
                        </FormControl>
                        <FormLabel className=" text-skin-gray-950 font-light">
                          Mesma titularidade
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="outra_titularidade" />
                        </FormControl>
                        <FormLabel className=" text-skin-gray-950 font-light">
                          Outra titularidade
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="banco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-base text-skin-gray-950 font-light">
                    Banco*
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" border border-green-light">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-6 grid-cols-2">
              <FormField
                control={form.control}
                name="agência"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-base text-skin-gray-950 font-light">
                      Agência (sem dígito) *
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        className=" border border-border-green-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conta"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-base text-skin-gray-950 font-light">
                      Conta (sem dígito) *
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        className=" border border-border-green-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="nome_da_conta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-base text-skin-gray-950 font-light">
                    Nome da conta
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      className=" border border-border-green-light"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className=" text-[#353A40] my-5 rounded-full  gap-2   text-xs lg:text-lg  font-semibold"
              type="submit"
              style={{ background: "#74EEAE" }}
            >
              Cartão de crédito <MdOutlineArrowForwardIos />
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default AdicionarSaldo;
