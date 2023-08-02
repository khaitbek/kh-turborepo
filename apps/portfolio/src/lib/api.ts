"use server";

import { db } from "@/server";
import { projects } from "@/server/schema/project";

export async function getPosts() {
  const allProjects = await db.select().from(projects);
  return allProjects;
}