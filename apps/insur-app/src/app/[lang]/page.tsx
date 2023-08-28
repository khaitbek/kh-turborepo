import { Container } from "@/components/ui/container"
import { getDictionary } from "@/lib/dictionary"
import { PageTitle, buttonVariants } from "ui"
import { Locale } from "../../../i18n.config"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Hydrate, dehydrate } from "@tanstack/react-query"
import getQueryClient from "@/lib/get-query-client"
import { getCarousels, getProducts } from "@/lib/api"
import { DataTable } from "@/components/ui/data-table"
import Link from "next/link"
import { cn } from "ui/lib/utils"
import { columns as productColumns } from "./products/columns"
import { columns as carouselColumns } from "./carousel/columns"

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
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="products">Mahsulotlar</TabsTrigger>
                        <TabsTrigger value="carousel">Carousel</TabsTrigger>
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
                </Tabs>
            </Container>
        </section>
    )
}
