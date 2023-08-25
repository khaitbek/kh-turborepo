"use client";
import { Article, insertArticleSchema } from "@/server/schema/article";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Textarea } from "ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input";


interface Props {
  addFunction?: Function
  editFunction?: Function
  isEditMode?: boolean
  data?: Article
}

export const NewArticleForm: FC<Props> = ({ addFunction, isEditMode, data = {}, editFunction }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<Article>({
    mode: "all",
    resolver: zodResolver(insertArticleSchema),
    defaultValues: {
      ...data
    }
  });
  const { mutate, isLoading, isError } = useMutation({
    mutationKey: ["articles", "new"],
    mutationFn: async function (values: Article) {
      console.log("Mutating", isEditMode);
      if (isEditMode) return editFunction?.(values);
      else return addFunction?.(values);
    },
    onSuccess(data, variables, context) {
      console.log(data, variables);
    },
    onError(error, variables, context) {
      console.log(error, !form.formState.isValid);
    }
  });
  const { register, formState: { errors }, } = form;

  const buttons = {
    ADD_MODE: <Button variant="secondary" disabled={form.formState.isLoading || !form.formState.isValid} type="submit">Submit</Button>,
    EDIT_MODE: <Button variant="secondary" disabled={form.formState.isLoading} type="submit">Submit</Button>
  }
  console.log(errors);
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
                <Textarea {...register("body")} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* {isEditMode && buttons.EDIT_MODE}
        {!isEditMode && buttons.ADD_MODE} */}
        <Button variant="secondary" type="submit">Submit</Button>
      </form>
    </Form>
  )
}