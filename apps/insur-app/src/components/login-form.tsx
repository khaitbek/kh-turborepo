"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginHandler, setToken } from "@/lib/api"
import { AdminModel } from "@/schema"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Button } from "ui"
import { useToast } from "./ui/use-toast"

export function LoginForm() {
    const router = useRouter()
    const { toast } = useToast()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["login"],
        mutationFn: async (values: z.infer<typeof AdminModel>) =>
            await loginHandler(values),
        onError(error, variables, context) {
            toast({
                title: "Xatolik yuz berdi!",
            })
        },
        onSuccess(data, variables, context) {
            setToken(data.token)
            router.push("/")
            router.replace("/");
        },
    })
    // 1. Define your form.
    const form = useForm<z.infer<typeof AdminModel>>({
        resolver: zodResolver(AdminModel),
        defaultValues: {},
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof AdminModel>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        mutate(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isLoading} type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    )
}
