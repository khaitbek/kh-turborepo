import { PageWrapper } from "@/components/loading/PageLoader";
import { Back } from "@/components/ui/Back";
import { Section } from "@/components/ui/Section";
import { db } from "@/server";
import { Project, projects } from "@/server/schema/project";
import { sql } from "drizzle-orm";
import Link from "next/link";
import { Button, Card, CardContent, CardFooter, CardHeader, Paragraph, TypographyH3, buttonVariants } from "ui";


import { Metadata } from "next"


interface ProjectProps {
  params: {
    id: Project["id"]
  }
}



const Project = async ({ params: { id } }: ProjectProps) => {
  const project = (await db.execute(sql`select * from ${projects} where ${projects.id} = ${id}`)).rows[0] as Project;
  console.log(project);
  return (
    <Section>
      <PageWrapper>
        <Back className="mb-12" />
        <Card className="flex flex-col justify-between" key={project.id as any}>
          <div>
            <CardHeader>
              <TypographyH3>
                {project.name}
              </TypographyH3>
            </CardHeader>
            <CardContent>
              <Paragraph className="max-w-full mb-6 break-all">
                {project.description}
              </Paragraph>

              <ul className="flex flex-wrap gap-x-4 gap-y-4 mt-4 border-t py-4 tracking-wider">

                {project.technologies?.split(",").map(technology => (
                  <li key={technology}>
                    <Button className="bg-barca" variant="destructive" size="sm" >
                      {technology}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>

          </div>
          <CardFooter className="grid gap-4 pt-4 border-t md:flex md:flex-row">
            <Link className={buttonVariants({ variant: "secondary" })} href={project.link!} target="_blank">
              See the demo
            </Link>
            <Link className={buttonVariants({})} href={project.sourceCode!} target="_blank">
              Source code
            </Link>
          </CardFooter>
        </Card>
      </PageWrapper>
    </Section>
  )
}

export default Project;