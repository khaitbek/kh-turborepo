import { GradientHeading } from "@/components/ui/GradientHeading"
import { Section } from "@/components/ui/Section"
import { db } from "@/server"
import { Article, articles } from "@/server/schema/article"
import { sql } from "drizzle-orm"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

interface Props {
  params: {
    id: Article["id"]
  }
}

const BlogPostPage = async ({ params: { id } }: Props) => {
  const blogPost = (await db.execute(sql`select * from ${articles} where id=${id}`)).rows[0] as Article;

  return (
    <Section>
      <GradientHeading className="mb-6" as="h2">
        {blogPost.name}
      </GradientHeading>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {blogPost.body as string}
      </ReactMarkdown>
    </Section>
  )
}

export default BlogPostPage;