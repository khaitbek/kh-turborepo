"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { addCarousel, axiosClient, editCarousel } from "@/lib/api"
import { objToFormData } from "@/lib/utils"
import { Carousel, CarouselModel } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Button } from "ui"
import * as z from "zod"
import { Container } from "./ui/container"
import { Input } from "./ui/input"
import { useToast } from "./ui/use-toast"
import { LangAsProp } from "@/types"

export async function editProduct(data: any, id: string) {
    return await axiosClient.put(`/product/${id}`, {
        ...data,
        id,
    })
}

export function NewCarouselForm({ lang }: { lang: LangAsProp }) {
    const formRef = useRef<HTMLFormElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)
    const imgTwoRef = useRef<HTMLInputElement>(null)
    const imgThreeRef = useRef<HTMLInputElement>(null)
    const { toast } = useToast()
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof CarouselModel>>({
        resolver: zodResolver(CarouselModel),
        defaultValues: {},
    })
    const queryClient = useQueryClient()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["new", "carousel"],
        mutationFn: async function (data: FormData) {
            const newProduct = await addCarousel(data)
        },
        onError: (err) => {
            toast({
                title: lang.form.error.default,
            })
        },
        onSuccess(data, variables, context) {
            toast({
                title: "Success!",
                description:
                    "Yangi carousel muvaffaqqiyatli ravishda qo'shildi!",
            })
            form.setValue("descriptionRu", "")
            form.setValue("descriptionUz", "")
            form.setValue("image", "")
            form.setValue("nameUz", "")
            form.setValue("nameRu", "")
            queryClient.invalidateQueries({
                queryKey: ["carousel"],
                exact: true,
            })
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof CarouselModel>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(imgRef.current?.files![0])
        const formValues: z.infer<typeof CarouselModel> = {
            ...values,
            image: imgRef.current?.files![0] as unknown as string,
        }
        const formData = objToFormData(formValues)
        mutate(formData)
    }
    console.log(form.formState.errors)
    return (
        <Container>
            <Form {...form}>
                <form
                    ref={formRef}
                    autoComplete="off"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        <FormField
                            control={form.control}
                            name="nameUz"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>O'zbekcha nomi</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="nameUz"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulotning o'zbekcha nomini lotin
                                        harflarida yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nameRu"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ruscha nomi</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="nameRu"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulotning ruscha nomini yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        <FormField
                            control={form.control}
                            name="descriptionUz"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ma'lumot</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulot haqida o'zbek tilida ma'lumot
                                        yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="descriptionRu"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ma'lumot</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulot haqida rus tilida ma'lumot
                                        yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rasm</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            placeholder="image"
                                            {...field}
                                            ref={imgRef}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Carouselning rasmi
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        disabled={isLoading || !form.formState.isValid}
                        type="submit"
                    >
                        Tasdiqlash
                    </Button>
                </form>
            </Form>
        </Container>
    )
}
export function EditCarouselForm({ data }: { data: Carousel | undefined }) {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["carousel", "edit", data?.id],
        mutationFn: async (values: z.infer<typeof CarouselModel>) =>
            await editCarousel(values, data!.id),
        onSuccess(data, variables, context) {
            toast({
                title: "Muvaffaqqiyatli amalga oshirildi!",
            })
            queryClient.invalidateQueries({ queryKey: ["carousel"] })
        },
        onError(error, variables, context) {
            toast({
                title: "Xatolik yuz berdi",
            })
        },
    })
    // 1. Define your form.
    const form = useForm<z.infer<typeof CarouselModel>>({
        resolver: zodResolver(CarouselModel),
        defaultValues: {
            ...data,
            image: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof CarouselModel>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        mutate(values)
    }
    console.log(form.formState.errors)
    return (
        <Container>
            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        <FormField
                            control={form.control}
                            name="nameUz"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>O'zbekcha nomi</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="nameUz"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulotning o'zbekcha nomini lotin
                                        harflarida yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="nameRu"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ruscha nomi</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="nameRu"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulotning ruscha nomini yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        <FormField
                            control={form.control}
                            name="descriptionUz"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ma'lumot</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulot haqida o'zbek tilida ma'lumot
                                        yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="descriptionRu"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ma'lumot</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulot haqida rus tilida ma'lumot
                                        yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        {/* <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rasm</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            placeholder="image"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Carouselning rasmi
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                    </div>
                    <Button
                        disabled={isLoading || !form.formState.isValid}
                        type="submit"
                    >
                        Tasdiqlash
                    </Button>
                </form>
            </Form>
        </Container>
    )
}
