"use client"

import { useToast } from "@/components/ui/use-toast"
import { Product } from "@/data/products"
import { deleteProduct } from "@/lib/api"
import { useMutation } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { Button, Paragraph, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nameUz",
        header: "name",
    },
    {
        accessorKey: "category",
        header: "category",
        cell(props) {
            const text = {
                MALE: "Erkaklar",
                FEMALE: "Ayollar",
                KIDS: "Bolalar",
            }
            return (
                <Paragraph className="text-black dark:text-white">
                    {/* @ts-ignore */}
                    {text[props.row.original.category] || "Umumiy"}
                </Paragraph>
            )
        },
    },
    {
        accessorKey: "onSale",
        header: "status",
    },
    {
        header: "actions",
        cell(props) {
            const { mutate, isLoading } = useMutation({
                mutationKey: ["delete", "product", props.row.original.id],
                mutationFn: async () =>
                    await deleteProduct(props.row.original.id),
                onSuccess(data, variables, context) {
                    toast({
                        title: "Muvaffaqqiyatli amalga oshirildi!",
                    })
                },
            })
            const { toast } = useToast()

            return (
                <div className="flex gap-6">
                    <Link
                        className={cn(buttonVariants({ variant: "outline" }))}
                        href={`/edit-product/${props.row.original.id}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            style={{
                                fill: "#fff",
                            }}
                        >
                            <path d="M14.5 5.5L3 17 3 21 7 21 18.5 9.5zM21.2 2.8c-1.1-1.1-2.9-1.1-4 0L16 4l4 4 1.2-1.2C22.3 5.7 22.3 3.9 21.2 2.8z"></path>
                        </svg>
                    </Link>
                    <Button
                        variant="destructive"
                        onClick={async () => {
                            await mutate()
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20px"
                            height="20px"
                            viewBox="0 0 30 30"
                            style={{ fill: "#fff" }}
                        >
                            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                        </svg>
                    </Button>
                </div>
            )
        },
    },
]
