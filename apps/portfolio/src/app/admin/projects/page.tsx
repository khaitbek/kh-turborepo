import { AdminTable } from "@/components/routing/AdminTable";
import { db, Project } from "@/server";
import { sql } from "drizzle-orm";
import { PageTitle } from "ui";
import { columns } from "./columns";
import { GradientHeading } from "@/components/ui/GradientHeading";


async function getData() {
  const projectsData = await (await db.execute(sql`select * from projects`)).rows as Project[];
  console.log(projectsData);
  return projectsData;
}
const Page = async () => {
  const projects = await getData();
  return (
    <>
      <GradientHeading className="mb-6">
        Projects Table
      </GradientHeading>
      <AdminTable columns={columns} data={projects} />
    </>
  )
}

export default Page;