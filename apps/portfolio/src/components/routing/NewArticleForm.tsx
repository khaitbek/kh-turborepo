"use client";
import { Article, insertArticleSchema } from "@/server/schema/article";
import { TechnologyToSelectOptions } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from "next/dynamic";
import { FC, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MultiSelect, Option } from "react-multi-select-component"
import { Button } from "ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input";
import { useToast } from "../ui/use-toast";

interface Props {
    addFunction?: Function
    editFunction?: Function
    isEditMode?: boolean
    data?: Article
    technologies?: TechnologyToSelectOptions[]
}

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

export const NewArticleForm: FC<Props> = ({
    addFunction,
    isEditMode,
    data = {},
    editFunction,
    technologies,
}) => {
    const [selected, setSelected] = useState([])
    const [markdown, setMarkdown] = useState<string>()
    const queryClient = useQueryClient()
    const formRef = useRef<HTMLFormElement>(null)
    const form = useForm<Article>({
        mode: "all",
        resolver: zodResolver(insertArticleSchema),
        defaultValues: {
            ...data,
        },
    })
    const { toast } = useToast()
    const { mutate, isLoading, isError } = useMutation({
        mutationKey: ["articles", "new"],
        mutationFn: async function (values: Article) {
            const data = {
                ...values,
                technologies: selected,
            }
            if (isEditMode) return editFunction?.(data)
            else return addFunction?.(data)
        },
        onSuccess(data, variables, context) {
            toast({
                title: "Success!",
            })
            queryClient.invalidateQueries({ queryKey: ["blog"] })
        },
        onError(error, variables, context) {
            console.log(error, !form.formState.isValid)
            toast({
                title: "Error!",
            })
        },
    })
    const {
        register,
        formState: { errors },
    } = form
    useEffect(() => {
        if (!isEditMode) return
        setMarkdown((data as Article).body!)
    }, [])
    useEffect(() => {
        form.setValue("body", markdown!)
    }, [markdown])
    return (
        <Form {...form} handleSubmit={form.handleSubmit} control={form.control}>
            <form
                ref={formRef}
                autoComplete="on"
                onSubmit={form.handleSubmit(mutate as SubmitHandler<Article>)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">
                                Article name
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
                    name="body"
                    render={() => (
                        <FormItem>
                            <FormLabel className="font-bold">Body</FormLabel>
                            <FormControl>
                                {/* @ts-ignore */}
                                <MDEditor
                                    value={markdown}
                                    onChange={setMarkdown}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <MultiSelect
                    className="bg-zinc-950 text-dark"
                    options={technologies as Option[]}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
                <Button disabled={isLoading} variant="secondary" type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    )
}