import { AdminTable } from "@/components/routing/AdminTable";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { db } from "@/server";
import { articles } from "@/server/schema/article";
import { Project } from "@/server/schema/project";
import { sql } from "drizzle-orm";
import { columns } from "./columns";


async function getData() {
  const projectsData = await (await db.execute(sql`select * from projects`)).rows as Project[];
  return projectsData;
}
const Page = async () => {
  const blogPosts = await db.select().from(articles);
  return (
    <>
      <GradientHeading className="mb-6">
        Blog Table
      </GradientHeading>
      <AdminTable tableFor="blog" columns={columns} data={blogPosts} />
    </>
  )
}

export default Page;