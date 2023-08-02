import { GradientHeading } from "@/components/ui/GradientHeading"
import { Section } from "@/components/ui/Section"
import { db } from "@/server"
import { Article, articles } from "@/server/schema/article"
import { sql } from "drizzle-orm"
import "github-markdown-css/github-markdown.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

interface Props {
  params: {
    id: Article["id"]
  }
}

const BlogPostPage = async ({ params: { id } }: Props) => {
  const blogPost = (await db.execute(sql`select * from ${articles} where id=${id}`)).rows[0] as Article;
  const markdown = "# Heading 1. # Hello world";
  return (
    <Section>
      <GradientHeading className="mb-6" as="h2">
        {blogPost.name}
      </GradientHeading>
      <div className="markdown-body font-inter py-4 px-6 rounded-md">
        <ReactMarkdown components={{
          h1: "div",
          strong: ({ node, ...props }) => <strong style={{ fontWeight: "800" }} {...props} />
        }}>
          {blogPost.body as string}
        </ReactMarkdown>
      </div>
    </Section>
  )
}

export default BlogPostPage;