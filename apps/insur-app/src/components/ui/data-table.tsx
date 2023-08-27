"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getProducts } from "@/lib/api"
import { getDictionary } from "@/lib/dictionary"
import { useQuery } from "@tanstack/react-query"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    lang: Awaited<ReturnType<typeof getDictionary>>
}

export function DataTable<TData, TValue>({
    columns,
    lang,
}: DataTableProps<TData, TValue>) {
    const { form, navigation, table: tableLang } = lang
    const { data } = useQuery({
        queryKey: ["products"],
        queryFn: async () => await getProducts(),
    })
    const table = useReactTable({
        data: (data! as TData[]) || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  // @ts-ignore
                                                  tableLang.columns[
                                                      header.column.columnDef
                                                          .header as any
                                                  ] ||
                                                      header.column.columnDef
                                                          .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
