import { GradientHeading } from "@/components/ui/GradientHeading";
import { db, Project } from "@/server";
import { sql } from "drizzle-orm";


async function getData() {
  const projectsData = await (await db.execute(sql`select * from projects`)).rows as Project[];
  return projectsData;
}
const Page = async () => {
  const projects = await getData();
  return (
    <>
      <GradientHeading className="mb-6">
        Blog Table
      </GradientHeading>
      {/* <AdminTable columns={columns} data={projects} /> */}
    </>
  )
}

export default Page;