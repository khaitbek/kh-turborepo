import { EditProductForm } from "@/components/product-form"
import { Container } from "@/components/ui/container"
import { getProductById } from "@/lib/api"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { Locale } from "../../../../../i18n.config"
import { getDictionary } from "@/lib/dictionary"

interface PageProps {
    params: {
        id: string
        lang: Locale
    }
}

async function getData(id: string) {
    return getProductById(id)
}
export default async function Home({ params: { id, lang } }: PageProps) {
    const data = await getData(id)
    const langInfo = await getDictionary(lang)
    return (
        <section className="py-12" id="home">
            <Container>
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({
                            variant: "destructive",
                            className: "mb-6 ml-6",
                        })
                    )}
                >
                    {langInfo.navigation.back}
                </Link>
                <PageTitle className="mb-12 ml-6">
                    {langInfo.navigation.edit}
                </PageTitle>
                <EditProductForm lang={langInfo} data={data} />
            </Container>
        </section>
    )
}
