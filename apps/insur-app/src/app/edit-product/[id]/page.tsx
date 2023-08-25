import { EditProductForm } from "@/components/product-form"
import { Container } from "@/components/ui/container"
import { payments } from "@/data/products"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"

interface PageProps {
    params: {
        id: string
    }
}

async function getData(id: string) {
    return payments.find((payment) => payment.id === id)
}
export default async function Home({ params: { id } }: PageProps) {
    const data = await getData(id)
    return (
        <section className="py-12" id="home">
            <Container>
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({
                            variant: "destructive",
                            className: "mb-6",
                        })
                    )}
                >
                    Back
                </Link>
                <PageTitle className="mb-12">
                    Edit product with the id of {id}
                </PageTitle>
                <EditProductForm data={data} />
            </Container>
        </section>
    )
}
