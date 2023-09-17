"use client"
import Link from "next/link"

import { Project } from "@/server/schema/project"
import { ColumnDef } from "@tanstack/react-table"
import { buttonVariants } from "ui"
import { cn } from "ui/lib/utils"

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "sourceCode",
        header: "Source code",
    },
    {
        header: "Edit",
        cell(props) {
            return (
                <Link
                    href={`/admin/technologies/${props.row.original.id}`}
                    className={cn(buttonVariants({ variant: "default" }))}
                >
                    Edit
                </Link>
            )
        },
    },
]
