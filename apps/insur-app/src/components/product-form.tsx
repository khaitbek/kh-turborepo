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
import { Product } from "@/data/products"
import { addProduct } from "@/lib/api"
import { objToFormData } from "@/lib/utils"
import { ProductEditModel, ProductModel } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Button } from "ui"
import * as z from "zod"
import { Checkbox } from "./ui/checkbox"
import { Container } from "./ui/container"
import { Input } from "./ui/input"
import { useToast } from "./ui/use-toast"

export async function editProduct(data: any, id: string) {
    return await axios.put(`http://localhost:5000/api/v1/product/${id}`, {
        ...data,
        id,
    });
}

export function NewProductForm() {
    const imgOneRef = useRef<HTMLInputElement>(null)
    const imgTwoRef = useRef<HTMLInputElement>(null)
    const imgThreeRef = useRef<HTMLInputElement>(null)
    const { toast } = useToast()
    // 1. Define your form.
    const form = useForm<z.infer<typeof ProductModel>>({
        resolver: zodResolver(ProductModel),
        defaultValues: {
            onSale: true,
        },
    })
    const { mutate, isLoading } = useMutation({
        mutationKey: ["product", "new"],
        mutationFn: async function (data: FormData) {
            const newProduct = await addProduct(data)
        },
        onError: (err) => {
            toast({
                title: "Xatolik yuz berdi!",
            })
            console.log(err)
        },
        onSuccess(data, variables, context) {
            toast({
                title: "Success!",
                description:
                    "Yangi mahsulot muvaffaqqiyatli ravishda qo'shildi!",
            })
            form.reset()
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof ProductModel>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const formValues: z.infer<typeof ProductModel> = {
            ...values,
            imgOne: imgOneRef.current?.files![0] as unknown as string,
            imgTwo: imgTwoRef.current?.files![0] as unknown as string,
            imgThree: imgThreeRef.current?.files![0] as unknown as string,
        }
        const formData = objToFormData(formValues)
        mutate(formData)
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
                    <FormField
                        control={form.control}
                        name="onSale"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 max-w-[200px]">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Aktiv holati</FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        <FormField
                            control={form.control}
                            name="imgOne"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Birinchi rasm</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            placeholder="imgOne"
                                            {...field}
                                            ref={imgOneRef}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulotning birinchi rasmi
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="imgTwo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ikkinchi rasm</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            placeholder="imgTwo"
                                            {...field}
                                            ref={imgTwoRef}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulotning ikkinchi rasmi
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="imgThree"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Uchinchi rasm</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            placeholder="imgThree"
                                            {...field}
                                            ref={imgThreeRef}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Mahsulotning uchinchi rasmi
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
                        Submit
                    </Button>
                </form>
            </Form>
        </Container>
    )
}
export function EditProductForm({ data }: { data: Product | undefined }) {
    const { toast } = useToast()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["products", "edit", data?.id],
        mutationFn: async (values: z.infer<typeof ProductEditModel>) =>
            await editProduct(values, data!.id),
        onSuccess(data, variables, context) {
            toast({
                title: "Muvaffaqqiyatli amalga oshirildi!",
            })
        },
        onError(error, variables, context) {
            toast({
                title: "Xatolik yuz berdi",
            })
        },
    })
    // 1. Define your form.
    const form = useForm<z.infer<typeof ProductEditModel>>({
        resolver: zodResolver(ProductEditModel),
        defaultValues: {
            ...data,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof ProductEditModel>) {
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
                                        Mahsulot haqida rus tilida ma'lumot yozing
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="onSale"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 max-w-[200px]">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Aktiv holati</FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                    {/* <FormField
                        control={form.control}
                        name="imgOne"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First image</FormLabel>
                                <FormControl>
                                    <Input
                                        className="upload-input"
                                        type="file"
                                        placeholder="imgOne"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your product's first image.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                    {/* <FormField
                        control={form.control}
                        name="imgTwo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First image</FormLabel>
                                <FormControl>
                                    <Input
                                        className="upload-input"
                                        type="file"
                                        placeholder="imgTwo"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your product's second image.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imgThree"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First image</FormLabel>
                                <FormControl>
                                    <Input
                                        className="upload-input"
                                        type="file"
                                        placeholder="imgThree"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your product's second image.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                    <Button disabled={isLoading} type="submit">
                        Submit
                    </Button>
                </form>
            </Form>
        </Container>
    )
}
