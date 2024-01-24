import { NewCarouselForm } from "@/components/carousel-form"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { Locale } from "../../../../i18n.config"
import { getDictionary } from "@/lib/dictionary"
import { PageProps } from "@/types"

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
                <NewCarouselForm lang={langInfo} />
            </Container>
        </section>
    )
}
