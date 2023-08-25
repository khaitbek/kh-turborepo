import { NewArticleForm } from "@/components/routing/NewArticleForm"
import { editArticle } from "@/lib/api"
import { db } from "@/server"
import { Article, articles } from "@/server/schema/article"
import { Project } from "@/server/schema/project"
import { sql } from "drizzle-orm"

interface Props {
  params: {
    id: Article["id"]
  }
}

const EditProjectPage = async ({ params: { id } }: Props) => {
  const getProjectInfo = (await db.execute(sql`select * from ${articles} where ${articles.id}=${id}`)).rows[0] as Article;
  return (
    <div>
      <NewArticleForm editFunction={editArticle} data={getProjectInfo} isEditMode={true}  />
    </div>
  )
}

export default EditProjectPage;