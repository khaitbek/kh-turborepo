import { InferModel, relations } from "drizzle-orm"
import { bigint, datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core"
import { z } from "zod"
import { articlesToTechnologies } from "./relations"

export const technologies = mysqlTable("technologies", {
    id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).unique(),
    createdAt: datetime("createdAt", { mode: "date" }).default(new Date()),
})

export const technologyRelations = relations(technologies, ({ many }) => ({
    articlesToTechnologies: many(articlesToTechnologies),
}))

export const insertTechSchema = z.object({
    name: z.string(),
})
export interface Technology extends InferModel<typeof technologies> {}
