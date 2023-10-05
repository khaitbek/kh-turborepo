// "use server";

// import { db } from "@/server";
// import { Article, articles } from "@/server/schema/article";
// import { projects } from "@/server/schema/project";
// import { sql } from "drizzle-orm";

// export async function getPosts() {
//   const allProjects = await db.select().from(projects);
//   return allProjects;
// }

// export async function editArticle(data: Article) {
//   console.log(data);
//   // const edittedArticle = db.update(articles).set({
//   //   name: data.name,
//   //   body: data.body,
//   //   updatedAt: new Date(),
//   // }).where(articles.id);
//   const edittedArticle = await db.execute(
//     sql`update ${articles} set ${articles.body}=${data.body}, ${
//       articles.name
//     }=${data.name}, ${articles.updatedAt}=${new Date()} where ${articles.id}=${
//       data.id
//     }`
//   );
//   return edittedArticle.rows[0];
// }
