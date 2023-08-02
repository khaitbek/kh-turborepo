"use client";

import { Article } from "@/server/schema/article";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  }
]