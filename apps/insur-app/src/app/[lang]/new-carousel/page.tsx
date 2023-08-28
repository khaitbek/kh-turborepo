import { NewCarouselForm } from "@/components/carousel-form"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { Locale } from "../../../../i18n.config"
import { getDictionary } from "@/lib/dictionary"

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale }
  }) {
  const { navigation} = await getDictionary(lang);
    return (
        <section className="py-12" id="home">
            <Container>
                <Link
                    href="/"
                    className={cn(buttonVariants({ variant: "destructive" }))}
                >
                    {navigation.back}
                </Link>
                <PageTitle className="mb-12 text-center">
                    {navigation.new}
                </PageTitle>
                <NewCarouselForm />
            </Container>
        </section>
    )
}
