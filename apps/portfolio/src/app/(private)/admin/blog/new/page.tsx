import { NewArticleForm } from "@/components/routing/NewArticleForm";
import { db } from "@/server";
import { Article, articles } from "@/server/schema/article";

export default function Page() {
  async function addBlogPost(formValues: Article) {
    "use server";
    try {
      const newProject = await db.insert(articles).values({
        ...formValues
      });
    } catch (error) {
    }
  }
  return (
    <>
      <NewArticleForm addFunction={addBlogPost} />
    </>
  )
}
