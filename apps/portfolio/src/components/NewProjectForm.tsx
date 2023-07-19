"use client";

import { insertProjectSchema, Project } from "@/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "ui";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./Form";
import { Input } from "./Input";

interface NewProjectFormProps {
  addFunction: Function
}

export const NewProjectForm: FC<NewProjectFormProps> = ({ addFunction }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<Project>({
    mode: "all",
    resolver: zodResolver(insertProjectSchema)
  });
  async function onSubmit(values: Project) {
    try {
      addFunction(values);
      formRef.current?.reset();
      form.reset();
      form.setValue("name", "");
      form.setValue("description", "");
      form.setValue("link", "");
      form.setValue("sourceCode", "");
      form.setValue("technologies", null);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form} handleSubmit={form.handleSubmit} control={form.control}>
      <form ref={formRef} autoComplete="on" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project name</FormLabel>
              <FormControl>
                {/* @ts-ignore */}
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Name of your project
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                {/* @ts-ignore */}
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Description of your project
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                {/* @ts-ignore */}
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Link to your project
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="technologies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technologies</FormLabel>
              <FormControl>
                {/* @ts-ignore */}
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                List of technologies used in your project
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sourceCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source code</FormLabel>
              <FormControl>
                {/* @ts-ignore */}
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your project's source code.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isLoading || !form.formState.isValid} type="submit">Submit</Button>
      </form>
    </Form>
  )
}
