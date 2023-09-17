import { InferModel, relations } from "drizzle-orm";
import {
  bigint,
  datetime,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { TechnologyToSelectOptions } from "../../types"
import { articlesToTechnologies } from "./relations"
import { Technology } from "./technology"

export const articles = mysqlTable("articles", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).unique(),
  body: text("body"),
  createdAt: datetime("createdAt", { mode: "date" }).default(new Date()),
  updatedAt: datetime("updatedAt", { mode: "date" }),
});
export interface Article extends InferModel<typeof articles> {
    technologies?: Technology[]
}
export interface ArticleWithTechnologyOptions
    extends InferModel<typeof articles> {
    technologies?: TechnologyToSelectOptions[]
}
export interface NewArticle extends InferModel<typeof articles, "insert"> {}
export const insertArticleSchema = createInsertSchema(articles, {
  body: (schema) =>
    schema.body.min(50, "Tuzukroq description yoz, fucking lazy!"),
  name: (schema) => schema.name.min(10, "Tuzukroq nom yoz!"),
  id: (schema) => schema.name.optional(),
  updatedAt: (schema) => schema.name.optional(),
  createdAt: (schema) => schema.name.optional(),
});
export const articleRelations = relations(articles, ({ many }) => ({
  articlesToTechnologies: many(articlesToTechnologies),
}));
