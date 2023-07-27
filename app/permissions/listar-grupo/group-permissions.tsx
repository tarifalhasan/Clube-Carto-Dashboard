'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import React from 'react';
import { SaveFileICon } from '@/assets/svg/icons';
interface Item {
  id: string;
  label: string;
}
interface CheckboxReactHookFormMultipleProps {
  items: {
    [key: string]: Item[];
  };
  // Any other props specific to the CheckboxReactHookFormMultiple component.
}

export const CheckboxReactHookFormMultiple: React.FC<
  CheckboxReactHookFormMultipleProps
> = ({ items }) => {
  const FormSchema = z.object({
    items: z.array(z.string()).refine(value => value.some(item => item), {
      message: 'You have to select at least one item.',
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(items).map(([category, itemList]) => (
            <FormField
              key={category}
              control={form.control}
              name={`items`}
              render={() => (
                <FormItem>
                  {itemList.map(item => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name={`items`}
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={checked => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          value => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className=" 2xl:px-24 flex justify-end">
          <Button
            variant={'secondary'}
            className=" text-base gap-3 lg:text-lg  font-semibold text-white"
            type="submit"
          >
            <SaveFileICon /> Salvar bloqueios
          </Button>
        </div>
      </form>
    </Form>
  );
};
