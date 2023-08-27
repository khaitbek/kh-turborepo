"use client"

import { useToast } from "@/components/ui/use-toast"
import { Product } from "@/data/products"
import { deleteProduct } from "@/lib/api"
import { useMutation } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { Button, buttonVariants } from "ui"
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
        header: "Nomi",
    },
    {
        accessorKey: "onSale",
        header: "Holati",
    },
    {
        header: "Amallar",
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
                        Edit
                    </Link>
                    <Button
                        onClick={async () => {
                            await mutate()
                        }}
                    >
                        Delete
                    </Button>
                </div>
            )
        },
    },
]
