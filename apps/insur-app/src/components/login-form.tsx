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
import { setToken } from "@/lib/actions"
import { loginHandler } from "@/lib/api"
import { getDictionary } from "@/lib/dictionary"
import { AdminModel } from "@/schema"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Button } from "ui"
import { useToast } from "./ui/use-toast"
import { LangAsProp } from "@/types"

export function LoginForm({ langInfo }: { langInfo: LangAsProp }) {
    const router = useRouter()
    const { navigation, form: formLang } = langInfo
    const { toast } = useToast()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["login"],
        mutationFn: async (values: z.infer<typeof AdminModel>) => {
            toast({
                title: langInfo.loading,
            })
            return await loginHandler(values)
        },
        onError(error, variables, context) {
            toast({
                title: langInfo.form.error.default,
            })
        },
        async onSuccess(data, variables, context) {
            await setToken(data.token)
            router.replace("/")
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
                            <FormLabel>
                                {langInfo.form.login.username}
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {langInfo.form.login.password}
                            </FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isLoading} type="submit">
                    {navigation.login}
                </Button>
            </form>
        </Form>
    )
}
