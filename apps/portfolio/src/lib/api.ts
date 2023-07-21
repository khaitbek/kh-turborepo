import { Project, db } from "@/server";
import { sql } from "drizzle-orm";

export async function getPosts() {
  const allProjects = (await db.execute(sql`select * from projects`))
    .rows as Project[];
  return allProjects;
}
