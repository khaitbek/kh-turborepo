import { notFound } from "next/navigation"
import { allDocs } from ".contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/ui/Mdx"
import { PageTitle, Paragraph } from "ui"

interface PageProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: PageProps["params"]) {
    const slug = params?.slug?.join("/")
    const post = allDocs.find((post) => post.slugAsParams === slug)
    if (!post) {
        null
    }
    return post
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const post = await getPostFromParams(params)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
    }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allDocs.map((post) => ({
        slug: post.slugAsParams.split("/"),
    }))
}

export default async function PostPage({ params }: PageProps) {
    const post = await getPostFromParams(params)

    if (!post) {
        notFound()
    }

    return (
        <article className="py-6 prose mx-auto dark:prose-invert">
            <div className="container mx-auto">
                <PageTitle className="mb-4">{post.title}</PageTitle>
                {post.description && (
                    <Paragraph className="text-xl mt-0 text-slate-700 dark:text-slate-200">
                        {post.description}
                    </Paragraph>
                )}
                <hr className="my-4" />
                <Mdx code={post.body.code} />
            </div>
        </article>
    )
}
