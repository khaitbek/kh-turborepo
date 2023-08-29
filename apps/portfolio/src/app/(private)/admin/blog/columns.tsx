"use client";

import { Article } from "@/server/schema/article";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { buttonVariants } from "ui";
import { cn } from "ui/lib/utils";

export const columns: ColumnDef<Article>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        header: "Edit",
        cell(props) {
            return (
                <Link
                    href={`/admin/blog/${props.row.original.id}`}
                    className={cn(buttonVariants({ variant: "default" }))}
                >
                    Edit
                </Link>
            )
        },
    },
]