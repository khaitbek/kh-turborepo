import { Container } from "@/components/ui/container"
import { DataTable } from "@/components/ui/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    carouselColumns,
    productColumns,
    questionColumns,
} from "@/data/columns"
import { getCarousels, getProducts, getQuestions } from "@/lib/api"
import { getDictionary } from "@/lib/dictionary"
import getQueryClient from "@/lib/get-query-client"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { Locale } from "../../../i18n.config"

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale }
}) {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["products"],
        queryFn: async () => await getProducts(),
    })
    await queryClient.prefetchQuery({
        queryKey: ["carousel"],
        queryFn: async () => await getCarousels(),
    })
    await queryClient.prefetchQuery({
        queryKey: ["questions"],
        queryFn: async () => await getQuestions(),
    })
    const dehydratedState = dehydrate(queryClient)

    const langInfo = await getDictionary(lang)
    const { navigation, form, table } = langInfo
    return (
        <section className="py-12" id="home">
            <Container>
                <div className="grid gap-6 max-w-[650px] mb-12 mx-auto text-center">
                    <PageTitle>{navigation.home}</PageTitle>
                </div>
                <Tabs defaultValue="products">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="products">
                            {langInfo.table.tabs.products}
                        </TabsTrigger>
                        <TabsTrigger value="carousel">
                            {langInfo.table.tabs.carousel}
                        </TabsTrigger>
                        <TabsTrigger value="faq">
                            {/* {langInfo.table.tabs.carousel} */}
                            FAQ
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="products">
                        <Hydrate state={dehydratedState}>
                            <DataTable
                                queryKey="products"
                                lang={langInfo}
                                columns={productColumns}
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
                    </TabsContent>
                    <TabsContent value="carousel">
                        <Hydrate state={dehydratedState}>
                            <DataTable
                                queryKey="carousel"
                                lang={langInfo}
                                columns={carouselColumns}
                            />
                        </Hydrate>
                        <Link
                            href="/new-carousel"
                            className={cn(
                                buttonVariants({
                                    variant: "secondary",
                                    className: "my-12",
                                })
                            )}
                        >
                            {navigation.new}
                        </Link>
                    </TabsContent>
                    <TabsContent value="faq">
                        <Hydrate state={dehydratedState}>
                            <DataTable
                                queryKey="questions"
                                lang={langInfo}
                                columns={questionColumns}
                            />
                        </Hydrate>
                        <Link
                            href="/new-question"
                            className={cn(
                                buttonVariants({
                                    variant: "secondary",
                                    className: "my-12",
                                })
                            )}
                        >
                            {navigation.new}
                        </Link>
                    </TabsContent>
                </Tabs>
            </Container>
        </section>
    )
}
