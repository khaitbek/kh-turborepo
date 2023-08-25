import { Container } from "@/components/ui/container"
import { DataTable } from "@/components/ui/data-table"
import { Payment } from "@/data/products"
import Link from "next/link"
import { PageTitle, Paragraph, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { columns } from "./columns"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "Casual",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status: true,
            imgOne: "https://isnur.netlify.app/images/card-1.png",
            imgTwo: "https://isnur.netlify.app/images/card-1.png",
            imgThree: "https://isnur.netlify.app/images/card-1.png",
        },
        {
            id: "728ed52f",
            name: "Casual",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status: true,
            imgOne: "https://isnur.netlify.app/images/card-3.png",
            imgTwo: "https://isnur.netlify.app/images/card-3.png",
            imgThree: "https://isnur.netlify.app/images/card-3.png",
        },
        {
            id: "728ed52f",
            name: "Casual",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            status: true,
            imgOne: "https://isnur.netlify.app/images/card-2.png",
            imgTwo: "https://isnur.netlify.app/images/card-2.png",
            imgThree: "https://isnur.netlify.app/images/card-2.png",
        },
        // ...
    ]
}

export default async function Home() {
    const data = await getData()
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
                <DataTable columns={columns} data={data} />
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
