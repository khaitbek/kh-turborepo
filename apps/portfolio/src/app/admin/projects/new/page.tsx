import { GradientHeading } from "@/components";
import { NewProjectForm } from "@/components/NewProjectForm";
import { db, Project, projects } from "@/server";

const Page = () => {
  async function addProject(formValues: Project) {
    "use server";
    const newProject = await db.insert(projects).values({
      ...formValues
    });
    console.log(newProject);
  }
  return (
    <>
      <GradientHeading className="mb-8" as="h2">
        Add a new project
      </GradientHeading>
      <NewProjectForm addFunction={addProject} />
    </>
  )
}

export default Page;
