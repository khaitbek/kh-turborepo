"use client"

import { Technology, insertTechSchema } from "@/server/schema/technology"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { FC, useRef } from "react"
import { useForm } from "react-hook-form"
import { Button } from "ui"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/Form"
import { Input } from "../ui/Input"

interface NewTechFormProps {
    addFunction: Function
}

export const NewTechForm: FC<NewTechFormProps> = ({ addFunction }) => {
    const queryClient = useQueryClient()
    const formRef = useRef<HTMLFormElement>(null)
    const form = useForm<Technology>({
        mode: "all",
        resolver: zodResolver(insertTechSchema),
    })
    const { register } = form
    async function onSubmit(values: Technology) {
        try {
            addFunction({ ...values })
            form.reset()
            await queryClient.invalidateQueries(["technologies"])
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
