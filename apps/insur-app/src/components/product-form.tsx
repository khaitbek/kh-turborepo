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
import { Payment } from "@/data/products"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "ui"
import * as z from "zod"
import { Checkbox } from "./ui/checkbox"
import { Container } from "./ui/container"
import { Input } from "./ui/input"

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    description: z.string(),
    status: z.boolean(),
    imgOne: z.string(),
    imgTwo: z.string(),
    imgThree: z.string(),
})

export function NewProductForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            status: true,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Container>
            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} />
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
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="description"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your product's description.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>In sale</FormLabel>
                                </div>
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
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </Container>
    )
}
export function EditProductForm({ data }: { data: Payment | undefined }) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ...data,
            imgOne: "",
            imgTwo: "",
            imgThree: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Container>
            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} />
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
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="description"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your product's description.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>In sale</FormLabel>
                                </div>
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
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </Container>
    )
}
