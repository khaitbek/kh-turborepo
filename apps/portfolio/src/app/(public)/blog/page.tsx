import { PageWrapper } from "@/components/loading/PageLoader"
import { Section } from "@/components/ui/Section"
import { db } from "@/server"
import { Article } from "@/server/schema/article"
import { Technology } from "@/server/schema/technology"
import { sql } from "drizzle-orm"
import Link from "next/link"
import { Button, Card, CardFooter, CardHeader, TypographyH3 } from "ui"

type Props = {}

const Page = async (props: Props) => {
    const articleData = (await db.execute(sql`select * from articles`))
        .rows as Article[]
    console.log(articleData)
    return (
        <PageWrapper>
            <Section>
                <ul className="grid gap-6">
                    {articleData.map((article) => (
                        <Card
                            className="mb-12 bg-stone-950"
                            key={String(article.id)}
                        >
                            <CardHeader className="text-white">
                                <Link
                                    className="hover:underline"
                                    href={`/blog/${article.id}`}
                                >
                                    <TypographyH3 className="text-start  bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                        {article.name}
                                    </TypographyH3>
                                </Link>
                            </CardHeader>
                            <CardFooter>
                                <ArticleTechnologies id={article.id} />
                            </CardFooter>
                        </Card>
                    ))}
                </ul>
            </Section>
        </PageWrapper>
    )
}

const ArticleTechnologies = async ({ id }: { id: Article["id"] }) => {
    const technologies = (
        await db.execute(
            sql`select t.* from technologies t join articles_to_technologies at on at.technologyId = t.id where at.articleId = ${id}`
        )
    ).rows as Technology[];

    return (
        <ul className="w-full grid grid-cols-[repeat(auto-fit,min(100px,100%))] gap-2">
            {technologies.map((technology) => (
                <li key={String(technology.id)}>
                    <Button className="w-full" variant="outline">
                        {technology.name}
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default Page
