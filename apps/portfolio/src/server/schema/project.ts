import { InferModel } from "drizzle-orm";
import { bigint, longtext, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";

export const projects = mysqlTable("projects", {
  id: bigint("id", { mode: "bigint" }).autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).unique(),
  link: varchar("link", { length: 255 }).unique(),
  sourceCode: varchar("sourceCode", { length: 255 }).unique(),
  description: longtext("description"),
  technologies: longtext("technologies"),
});
export interface Project extends InferModel<typeof projects> {}
export const insertProjectSchema = createInsertSchema(projects, {
  description: (schema) =>
    schema.description.min(50, "Tuzukroq description yoz, fucking lazy!"),
  link: (schema) => schema.link.url("Valid URL kirit!"),
  sourceCode: (schema) => schema.link.url("Valid URL kirit!"),
});
export const selectProjectSchema = createInsertSchema(projects);
