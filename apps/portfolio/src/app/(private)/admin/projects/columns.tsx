"use client";

import { Project } from "@/server/schema/project";
import { ColumnDef } from "@tanstack/react-table";

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

]