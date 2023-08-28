import { Container } from "@/components/ui/container"
import { DataTable } from "@/components/ui/data-table"
import { getProducts } from "@/lib/api"
import { getDictionary } from "@/lib/dictionary"
import getQueryClient from "@/lib/get-query-client"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { Locale } from "../../../../i18n.config"
import { columns } from "./columns"

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    const langInfo = await getDictionary(lang)
    const { navigation, form, table } = langInfo
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
                    <PageTitle>{navigation.home}</PageTitle>
                </div>
                <Hydrate state={dehydratedState}>
                    <DataTable
                        queryKey="products"
                        lang={langInfo}
                        columns={columns}
                    />
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
                    {navigation.new}
                </Link>
            </Container>
        </section>
    )
}
