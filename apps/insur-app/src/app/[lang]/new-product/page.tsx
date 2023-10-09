import { NewProductForm } from "@/components/product-form"
import { Container } from "@/components/ui/container"
import { getDictionary } from "@/lib/dictionary"
import { PageProps } from "@/types"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"

export default async function Home({ params: { lang } }: PageProps) {
    const langInfo = await getDictionary(lang)
    return (
        <section className="py-12" id="home">
            <Container>
                <Link
                    href="/"
                    className={cn(buttonVariants({ variant: "destructive" }))}
                >
                    {langInfo.navigation.back}
                </Link>
                <PageTitle className="mb-12 text-center">
                    {langInfo.navigation.new}
                </PageTitle>
                <NewProductForm lang={langInfo} />
            </Container>
        </section>
    )
}
