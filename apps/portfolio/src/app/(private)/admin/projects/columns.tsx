"use client";

import { Project } from "@/server/schema/project";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { buttonVariants } from "ui";
import { cn } from "ui/lib/utils";

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
    accessorKey: "link",
    header: "Link",
  },
  {
    accessorKey: "sourceCode",
    header: "Source code"
  },
  {
    header: "Edit",
    cell(props) {
      return (
        <Link href={`/admin/projects/${props.row.original.id}`} className={cn(buttonVariants({variant:"default"}))}>
          Edit
        </Link>
        )
    },
  }
]