import { allDocuments } from ".contentlayer/generated"
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    PageTitle,
    TypographyH3,
} from "ui"
import { Section } from "./Section"
import Link from "next/link"

export function Articles() {
    return (
        <Section id="articles">
            <PageTitle
                as="h2"
                className="mb-6 text-center text-[36px] md:text-[48px] lg:text-[60px] text-[36px] md:text-[48px] lg:text-[60px] tracking-widest uppercase"
            >
                Articles
            </PageTitle>
            <ul className="grid gap-4">
                {allDocuments.map((doc) => (
                    <li key={doc._id}>
                        <Card>
                            <div>
                                <CardHeader>
                                    <Link href={doc.slug} target="_blank">
                                        <TypographyH3 className="m-0">
                                            {doc.title}
                                        </TypographyH3>
                                    </Link>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        {doc.description}
                                    </CardDescription>
                                </CardContent>
                            </div>
                            <CardFooter>
                                <ul className="flex flex-wrap gap-4">
                                    {doc.categories
                                        ?.split(",")
                                        .map((category) => (
                                            <li key={category}>
                                                <Button variant="outline">
                                                    {category}
                                                </Button>
                                            </li>
                                        ))}
                                </ul>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
