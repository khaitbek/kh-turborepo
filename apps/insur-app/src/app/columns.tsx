"use client"

import { Payment } from "@/data/products"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { buttonVariants } from "ui"
import { cn } from "ui/lib/utils"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Product name",
    },
    {
        accessorKey: "status",
        header: "On sale",
    },
    {
        header: "Actions",
        cell(props) {
            return (
                <Link
                    className={cn(buttonVariants({ variant: "outline" }))}
                    href={`/edit-product/${props.row.original.id}`}
                >
                    Edit
                </Link>
            )
        },
    },
]
