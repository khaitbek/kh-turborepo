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
import { addQuestion, editQuestion, loginHandler } from "@/lib/api"
import { getDictionary } from "@/lib/dictionary"
import { AdminModel } from "@/schema"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Button } from "ui"
import { useToast } from "./ui/use-toast"
import { LangAsProp } from "@/types"
import { Question, questionSchema } from "@/schema/question"

type QuestionFormProps = {
    langInfo: LangAsProp
} & (
    | {
          editMode: false
          data?: {}
      }
    | {
          editMode: true
          data: Question
      }
)
export function QuestionForm({ langInfo, editMode, data }: QuestionFormProps) {
    const router = useRouter()
    const { navigation, form: formLang } = langInfo
    const { toast } = useToast()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["login"],
        mutationFn: async (values: Question) => {
            console.log(values)
            toast({
                title: langInfo.loading,
            })
            return editMode
                ? await editQuestion(values, data.id!)
                : await addQuestion(values)
        },
        onError(error, variables, context) {
            toast({
                title: langInfo.form.error.default,
            })
        },
        async onSuccess(data, variables, context) {
            toast({
                title: langInfo.success,
            })
        },
    })
    // 1. Define your form.
    const form = useForm<Question>({
        resolver: zodResolver(questionSchema),
        defaultValues: data,
    })

    // 2. Define a submit handler.
    function onSubmit(values: Question) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        mutate(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="titleUz"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {/* {langInfo.form.login.username} */}
                                Savolni o'zbek tilida yozing
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
                    name="titleRu"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {/* {langInfo.form.login.username} */}
                                Savolni rus tilida yozing
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
                    name="answerUz"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {/* {langInfo.form.login.username} */}
                                Javobni o'zbek tilida yozing
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
                    name="answerRu"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {/* {langInfo.form.login.username} */}
                                Javobni rus tilida yozing
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isLoading} type="submit">
                    {langInfo.navigation.new}
                </Button>
            </form>
        </Form>
    )
}
