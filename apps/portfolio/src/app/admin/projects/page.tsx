import { AdminTable } from "@/components/AdminTable";
import { db, Project } from "@/server";
import { sql } from "drizzle-orm";
import { PageTitle } from "ui";
import { columns } from "./columns";


async function getData() {
  const projectsData = await (await db.execute(sql`select * from projects`)).rows as Project[];
  console.log(projectsData);
  return projectsData;
}
const Page = async () => {
  const projects = await getData();
  return (
    <div>
      <PageTitle>
        Projects Table
      </PageTitle>
      <AdminTable columns={columns} data={projects} />
    </div>
  )
}

export default Page;