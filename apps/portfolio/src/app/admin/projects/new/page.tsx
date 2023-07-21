import { NewProjectForm } from "@/components/routing/NewProjectForm";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { db, Project, projects } from "@/server";

const Page = () => {
  async function addProject(formValues: Project) {
    "use server";
    try {
      const newProject = await db.insert(projects).values({
        ...formValues
      });
      console.log(newProject);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="max-w-[500px] mx-auto">
      <GradientHeading className="mb-8" as="h2">
        Add a new project
      </GradientHeading>
      <NewProjectForm addFunction={addProject} />
    </div>
  )
}

export default Page;
