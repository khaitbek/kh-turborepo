import { NewTechForm } from "@/components/routing/NewTechnologyForm"
import { GradientHeading } from "@/components/ui/GradientHeading"
import { db } from "@/server"
import { Project } from "@/server/schema/project"
import { technologies } from "@/server/schema/technology"

const Page = () => {
    async function addProject(formValues: Project) {
        "use server"
        try {
            const newProject = await db.insert(technologies).values({
                ...formValues,
            })
        } catch (error) {}
    }
    return (
        <div className="max-w-[500px] mx-auto">
            <GradientHeading className="mb-8" as="h2">
                Add a new project
            </GradientHeading>
            <NewTechForm addFunction={addProject} />
        </div>
    )
}

export default Page
