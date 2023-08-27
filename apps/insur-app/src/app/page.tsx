import { Container } from "@/components/ui/container"
import { DataTable } from "@/components/ui/data-table"
import { getProducts } from "@/lib/api"
import getQueryClient from "@/lib/get-query-client"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import Link from "next/link"
import { PageTitle, Paragraph, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { columns } from "./columns"

export default async function Home() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["products"],
        queryFn: async () => await getProducts(),
    })
    const dehydratedState = dehydrate(queryClient)
    return (
        <section className="py-12" id="home">
            <Container>
                <div className="grid gap-6 max-w-[650px] mb-12 mx-auto text-center">
                    <PageTitle>Isnur Admin Dashboard</PageTitle>
                    <Paragraph>
                        This website is an admin dashboard for the Isnur App.
                        Here you can manage all the products, you can add new
                        products, you can delete or update the product you need
                    </Paragraph>
                </div>
                <Hydrate state={dehydratedState}>
                    <DataTable columns={columns} />
                </Hydrate>
                <Link
                    href="/new-product"
                    className={cn(
                        buttonVariants({
                            variant: "secondary",
                            className: "my-12",
                        })
                    )}
                >
                    Add new
                </Link>
            </Container>
        </section>
    )
}
