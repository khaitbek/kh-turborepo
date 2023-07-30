"use client";
import { Project, insertProjectSchema } from "@/server";
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

export const NewArticleForm: FC<Props> = ({ }) => {
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<Project>({
    mode: "all",
    resolver: zodResolver(insertProjectSchema)
  });
  const { mutate, isLoading, isError } = useMutation({
    mutationKey: ["articles", "new"],
    mutationFn: async function (values: Project) {
      console.log(values);
    }
  });
  const { register } = form;
  return (
    <Form {...form} handleSubmit={form.handleSubmit} control={form.control}>
      <form ref={formRef} autoComplete="on" onSubmit={form.handleSubmit(mutate as SubmitHandler<Project>)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Project name</FormLabel>
              <FormControl>
                <Input {...register("name")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Description</FormLabel>
              <FormControl>
                <Input {...register("description")} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Link</FormLabel>
              <FormControl>
                <Input {...register("link")} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="technologies"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Technologies</FormLabel>
              <FormControl>
                <Input {...register("technologies")} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sourceCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Source code</FormLabel>
              <FormControl>
                <Input {...register("sourceCode")} />
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