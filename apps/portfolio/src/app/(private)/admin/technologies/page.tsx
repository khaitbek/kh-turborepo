import { AdminTable } from "@/components/routing/AdminTable"
import { db } from "@/server"
import { Technology, technologies } from "@/server/schema/technology"
import { sql } from "drizzle-orm"
import { columns } from "./columns"
import { GradientHeading } from "@/components/ui/GradientHeading"

const Technologies = async () => {
    const technologyInfo = (
        await db.execute(sql`select * from ${technologies}`)
    ).rows as Technology[]
    return (
        <>
            <GradientHeading className="mb-6">Technologies Table</GradientHeading>
            <AdminTable
                // @ts-expect-error
                data={technologyInfo}
                columns={columns}
                tableFor="technologies"
            />
        </>
    )
}

export default Technologies
