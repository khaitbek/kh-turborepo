"use client";
import { Article, insertArticleSchema } from "@/server/schema/article";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input";

interface Props {
  addFunction?: Function
}

export const NewArticleForm: FC<Props> = ({ addFunction }) => {
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<Article>({
    mode: "all",
    resolver: zodResolver(insertArticleSchema)
  });
  const { mutate, isLoading, isError } = useMutation({
    mutationKey: ["articles", "new"],
    mutationFn: async function (values: Article) {
      addFunction?.(values);
    },
    onSuccess(data, variables, context) {
      console.log(data, variables);
    },
    onError(error, variables, context) {
      console.log(error);
    }
  });
  const { register } = form;
  return (
    <Form {...form} handleSubmit={form.handleSubmit} control={form.control}>
      <form ref={formRef} autoComplete="on" onSubmit={form.handleSubmit(mutate as SubmitHandler<Article>)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Article name</FormLabel>
              <FormControl>
                <Input {...register("name")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">body</FormLabel>
              <FormControl>
                <Input {...register("body")} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="secondary" disabled={form.formState.isLoading || !form.formState.isValid} type="submit">Submit</Button>
      </form>
    </Form>
  )
}