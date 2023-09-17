import { Back } from "@/components/ui/Back"
import { GradientHeading } from "@/components/ui/GradientHeading"
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer"
import { db } from "@/server"
import { Article, articles } from "@/server/schema/article"
import { sql } from "drizzle-orm"

interface Props {
    params: {
        id: Article["id"]
    }
}

const BlogPostPage = async ({ params: { id } }: Props) => {
    const blogPost = (
        await db.execute(sql`select * from ${articles} where id=${id}`)
    ).rows[0] as Article
    const markdown = "# Heading 1. # Hello world"
    return (
        <>
            <div className="container mx-auto mb-6 pt-12">
                <Back />
            </div>
            <div className="max-w-[80ch] mx-auto">
                {/* <GradientHeading className="mb-6" as="h2">
                    {blogPost.name}
                </GradientHeading> */}
                <div className="markdown-body font-inter py-4 px-6 rounded-md">
                    <MarkdownRenderer>
                        {blogPost.body as string}
                    </MarkdownRenderer>
                </div>
            </div>
        </>
    )
}

export default BlogPostPage;