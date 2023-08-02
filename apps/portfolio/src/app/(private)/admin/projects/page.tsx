import { AdminTable } from "@/components/routing/AdminTable";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { db } from "@/server";
import { Project, projects } from "@/server/schema/project";
import { sql } from "drizzle-orm";
import { columns } from "./columns";


async function getData() {
  const projectsData = await (await db.execute(sql`select * from ${projects
    }`)).rows as Project[];
  return projectsData;
}
const Page = async () => {
  const projects = await getData();
  return (
    <>
      <GradientHeading className="mb-6">
        Projects Table
      </GradientHeading>
      <AdminTable tableFor="projects" columns={columns} data={projects} />
    </>
  )
}

export default Page;