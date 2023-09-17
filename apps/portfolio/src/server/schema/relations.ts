import { relations } from "drizzle-orm"
import { bigint, mysqlTable, primaryKey } from "drizzle-orm/mysql-core"
import { articles } from "./article"
import { technologies } from "./technology"

export const articlesToTechnologies = mysqlTable(
    "articles_to_technologies",
    {
        articleId: bigint("articleId", { mode: "bigint" })
            .notNull()
            .references(() => articles.id),
        technologyId: bigint("technologyId", { mode: "bigint" })
            .notNull()
            .references(() => technologies.id),
    },
    (t) => ({
        pk: primaryKey(t.articleId, t.technologyId),
    })
)

export const articlesToTechnologiesRelation = relations(
    articlesToTechnologies,
    ({ one }) => ({
        technology: one(technologies, {
            fields: [articlesToTechnologies.technologyId],
            references: [technologies.id],
        }),
        article: one(articles, {
            fields: [articlesToTechnologies.articleId],
            references: [articles.id],
        }),
    })
)
