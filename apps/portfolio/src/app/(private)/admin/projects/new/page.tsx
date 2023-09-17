import { NewProjectForm } from "@/components/routing/NewProjectForm";
import { GradientHeading } from "@/components/ui/GradientHeading";
import { db } from "@/server";
import { Project, projects } from "@/server/schema/project";
import { technologies } from "@/server/schema/technology"
import { sql } from "drizzle-orm"
import { TechnologyToSelectOptions } from "../../../../../types"



const Page = async () => {
    const technologyData = (
        await db.execute(
            sql`select id as value,name as label from ${technologies}`
        )
    ).rows as TechnologyToSelectOptions[]
    console.log(technologyData)
    async function addProject(formValues: Project) {
        "use server"
        try {
            const newProject = await db.insert(projects).values({
                ...formValues,
            })
        } catch (error) {}
    }
    return (
        <div className="max-w-[500px] mx-auto">
            <GradientHeading className="mb-8" as="h2">
                Add a new project
            </GradientHeading>
            <NewProjectForm
                technologies={technologyData}
                addFunction={addProject}
            />
        </div>
    )
}

export default Page;
