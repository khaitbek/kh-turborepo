import { NewProductForm } from "@/components/product-form"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"

export default async function Home() {
    return (
        <section className="py-12" id="home">
            <Container>
                <Link
                    href="/"
                    className={cn(buttonVariants({ variant: "destructive" }))}
                >
                    Ortga
                </Link>
                <PageTitle className="mb-12 text-center">
                    Mahsulot qo'shish
                </PageTitle>
                <NewProductForm />
            </Container>
        </section>
    )
}
