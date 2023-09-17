"use client";
import { Project, insertProjectSchema } from "@/server/schema/project"
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { FC, useRef, useState } from "react"
import { useForm } from "react-hook-form";
import { Button } from "ui";
import { TechnologyToSelectOptions } from "../../types"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input"

interface NewProjectFormProps {
    addFunction: Function
    technologies: TechnologyToSelectOptions[]
}

export const NewProjectForm: FC<NewProjectFormProps> = ({
    addFunction,
    technologies,
}) => {
    const [selected, setSelected] = useState([])
    const queryClient = useQueryClient()
    const formRef = useRef<HTMLFormElement>(null)
    const form = useForm<Project>({
        mode: "all",
        resolver: zodResolver(insertProjectSchema),
    })
    const { register } = form
    async function onSubmit(values: Project) {
        try {
            // form.setValue("technologies", selected);
            addFunction({ ...values })
            form.reset()
            await queryClient.invalidateQueries(["projects"])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form} handleSubmit={form.handleSubmit} control={form.control}>
            <form
                ref={formRef}
                autoComplete="on"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">
                                Project name
                            </FormLabel>
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
                            <FormLabel className="font-bold">
                                Description
                            </FormLabel>
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
                            <FormLabel className="font-bold">
                                Technologies
                            </FormLabel>
                            <FormControl>
                                <Input {...register("technologies")} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <MultiSelect
                    className="bg-zinc-950 text-dark"
                    options={technologies}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                /> */}
                <FormField
                    control={form.control}
                    name="sourceCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">
                                Source code
                            </FormLabel>
                            <FormControl>
                                <Input {...register("sourceCode")} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    variant="secondary"
                    disabled={
                        form.formState.isLoading || !form.formState.isValid
                    }
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Form>
    )
}
