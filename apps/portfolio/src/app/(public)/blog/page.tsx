import { Section } from "@/components/ui/Section";
import { db } from "@/server";
import { articles } from "@/server/schema/article";
import Link from "next/link";
import { Card, CardFooter, CardHeader, buttonVariants } from "ui";

type Props = {}

const Page = async (props: Props) => {
  const articleData = await db.select().from(articles);
  return (
      <Section>
          {articleData.map((article) => (
              <Card className="mb-12 bg-stone-950" key={String(article.id)}>
                  <CardHeader className="text-white">{article.name}</CardHeader>
                  <CardFooter>
                      <Link
                          className={buttonVariants({
                              variant: "secondary",
                              size: "lg",
                              className: "bg-barca text-white",
                          })}
                          href={`/blog/${article.id}`}
                      >
                          Read
                      </Link>
                  </CardFooter>
              </Card>
          ))}
      </Section>
  )
}

export default Page;