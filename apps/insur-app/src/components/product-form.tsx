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
import { addProduct, axiosClient } from "@/lib/api"
import { objToFormData } from "@/lib/utils"
import { ProductEditModel, ProductModel } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import {
    Button,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "ui"
import * as z from "zod"
import { Checkbox } from "./ui/checkbox"
import { Container } from "./ui/container"
import { Input } from "./ui/input"
import { useToast } from "./ui/use-toast"
import { LangAsProp } from "@/types"

export async function editProduct(data: FormData, id: string) {
    data.set("id", id)
    return await axiosClient.put(`/product/${id}`, data)
}

export function NewProductForm({ lang }: { lang: LangAsProp }) {
    const formRef = useRef<HTMLFormElement>(null)
    const imgOneRef = useRef<HTMLInputElement>(null)
    const imgTwoRef = useRef<HTMLInputElement>(null)
    const imgThreeRef = useRef<HTMLInputElement>(null)
    const { toast } = useToast()
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof ProductModel>>({
        resolver: zodResolver(ProductModel),
        defaultValues: {
            onSale: true,
        },
    })
    const queryClient = useQueryClient()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["product", "new"],
        mutationFn: async function (data: FormData) {
            const newProduct = await addProduct(data)
            console.log(newProduct)
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
            form.setValue("descriptionRu", "")
            form.setValue("descriptionUz", "")
            form.setValue("imgOne", "")
            form.setValue("imgTwo", "")
            form.setValue("imgThree", "")
            form.setValue("nameUz", "")
            form.setValue("nameRu", "")
            form.setValue("category", "")
            form.setValue("type", "")
            form.setValue("onSale", false)
            queryClient.invalidateQueries({ queryKey: ["products"] })
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
                                    <FormLabel>
                                        {lang.form.product.nameUz.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.nameRu.label}
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
                                    <FormLabel>
                                        {lang.form.product.nameRu.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.nameRu.desc}
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
                                    <FormLabel>
                                        {lang.form.product.descriptionUz.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.descriptionUz.desc}
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
                                    <FormLabel>
                                        {lang.form.product.descriptionRu.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.descriptionRu.desc}
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
                                    <FormLabel>
                                        {lang.form.product.onSale.label}
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {lang.form.product.category.label}
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder={
                                                    lang.form.product.category
                                                        .desc
                                                }
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem defaultChecked value="ALL">
                                            {lang.form.product.categories.all}
                                        </SelectItem>
                                        <SelectItem value="MALE">
                                            {lang.form.product.categories.male}
                                        </SelectItem>
                                        <SelectItem value="FEMALE">
                                            {
                                                lang.form.product.categories
                                                    .female
                                            }
                                        </SelectItem>
                                        <SelectItem value="KIDS">
                                            {lang.form.product.categories.kids}
                                        </SelectItem>
                                        <SelectItem value="TIGHTS">
                                            {
                                                lang.form.product.categories
                                                    .tights
                                            }
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-6 " style={{ flexWrap: "wrap" }}>
                        <FormField
                            control={form.control}
                            name="imgOne"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        {lang.form.product.imgOne.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            {...field}
                                            ref={imgOneRef}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.imgOne.desc}
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
                                    <FormLabel>
                                        {" "}
                                        {lang.form.product.imgTwo.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            {...field}
                                            ref={imgTwoRef}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.imgTwo.desc}
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
                                    <FormLabel>
                                        {" "}
                                        {lang.form.product.imgThree.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="upload-input"
                                            type="file"
                                            {...field}
                                            ref={imgThreeRef}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.imgThree.desc}
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
                        {lang.navigation.new}
                    </Button>
                </form>
            </Form>
        </Container>
    )
}
export function EditProductForm({
    data,
    lang,
}: {
    data: Product | undefined
    lang: LangAsProp
}) {
    const formRef = useRef<HTMLFormElement>(null)
    const imgOneRef = useRef<HTMLInputElement>(null)
    const imgTwoRef = useRef<HTMLInputElement>(null)
    const imgThreeRef = useRef<HTMLInputElement>(null)
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const { mutate, isLoading } = useMutation({
        mutationKey: ["products", "edit", data?.id],
        mutationFn: async (values: FormData) =>
            await editProduct(values, data!.id),
        onSuccess(data, variables, context) {
            toast({
                title: lang.success,
            })
            queryClient.invalidateQueries({ queryKey: ["products"] })
        },
        onError(error, variables, context) {
            toast({
                title: lang.form.error.default,
            })
        },
    })
    // 1. Define your form.
    const form = useForm<z.infer<typeof ProductModel>>({
        resolver: zodResolver(ProductModel),
        defaultValues: {
            ...data,
            imgOne: "",
            imgTwo: "",
            imgThree: "",
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
        console.log("Form values ==>>", formValues)
        const formData = objToFormData(formValues)
        mutate(formData)
    }
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
                                    <FormLabel>
                                        {lang.form.product.nameUz.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.nameRu.label}
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
                                    <FormLabel>
                                        {lang.form.product.nameRu.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.nameRu.desc}
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
                                    <FormLabel>
                                        {lang.form.product.descriptionUz.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.descriptionUz.desc}
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
                                    <FormLabel>
                                        {lang.form.product.descriptionRu.label}
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        {lang.form.product.descriptionRu.desc}
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
                                    <FormLabel>
                                        {lang.form.product.onSale.label}
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {lang.form.product.category.label}
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder={
                                                    lang.form.product.category
                                                        .desc
                                                }
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem defaultChecked value="ALL">
                                            {lang.form.product.categories.all}
                                        </SelectItem>
                                        <SelectItem value="MALE">
                                            {lang.form.product.categories.male}
                                        </SelectItem>
                                        <SelectItem value="FEMALE">
                                            {
                                                lang.form.product.categories
                                                    .female
                                            }
                                        </SelectItem>
                                        <SelectItem value="KIDS">
                                            {lang.form.product.categories.kids}
                                        </SelectItem>
                                        <SelectItem value="TIGHTS">
                                            {
                                                lang.form.product.categories
                                                    .tights
                                            }
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imgOne"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First image</FormLabel>
                                <FormControl>
                                    <Input
                                        className="upload-input"
                                        type="file"
                                        {...field}
                                        ref={imgOneRef}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your product's first image.
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
                                <FormLabel>First image</FormLabel>
                                <FormControl>
                                    <Input
                                        className="upload-input"
                                        type="file"
                                        {...field}
                                        ref={imgTwoRef}
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
                                        {...field}
                                        ref={imgThreeRef}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your product's second image.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isLoading} type="submit">
                        {lang.navigation.edit}
                    </Button>
                </form>
            </Form>
        </Container>
    )
}
