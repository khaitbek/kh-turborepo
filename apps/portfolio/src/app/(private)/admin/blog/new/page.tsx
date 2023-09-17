import { NewArticleForm } from "@/components/routing/NewArticleForm";
import { db } from "@/server";
import { ArticleWithTechnologyOptions, articles } from "@/server/schema/article"
import { articlesToTechnologies } from "@/server/schema/relations"
import { technologies } from "@/server/schema/technology"
import { TechnologyToSelectOptions } from "@/types"
import { sql } from "drizzle-orm"

export default async function Page() {
    const technologyData = (
        await db.execute(
            sql`select id as value,name as label from ${technologies}`
        )
    ).rows as TechnologyToSelectOptions[]
    async function addBlogPost(formValues: ArticleWithTechnologyOptions) {
        "use server"
        try {
            const newArticle = await db.insert(articles).values({
                body: formValues.body,
                name: formValues.name,
            })
            formValues?.technologies?.forEach(async (technology) => {
                await db.insert(articlesToTechnologies).values({
                    articleId: Number(newArticle.insertId) as any,
                    technologyId: technology.value,
                })
            })
        } catch (error) {
            return { error }
        }
    }
    return (
        <>
            <NewArticleForm
                technologies={technologyData}
                addFunction={addBlogPost}
            />
        </>
    )
}
