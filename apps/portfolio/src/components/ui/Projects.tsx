"use client";
import { getPosts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Button, Card, CardContent, CardFooter, CardHeader, Paragraph, Skeleton, TypographyH3, buttonVariants } from "ui";
import { GradientHeading } from "./GradientHeading";
import { Section } from "./Section";

export const Projects = () => {
  const { data: projects, isLoading } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  if (isLoading) return (
    <Skeleton>
      <TypographyH3>
        Loading
      </TypographyH3>
    </Skeleton>
  )
  return (
    <Section className="py-[100px]">
      <div className="flex items-center justify-center">
        <GradientHeading as="h2" variant="barca" className="mb-12  text-[36px] md:text-[48px] lg:text-[60px] tracking-widest uppercase ">
          Coding projects
        </GradientHeading>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fit,min(350px,100%))] justify-center gap-x-6 gap-y-8">
        {projects?.map(project => (
          <Card className="flex flex-col justify-between" key={project.id as any}>
            <div>
              <CardHeader>
                <TypographyH3>
                  {project.name}
                </TypographyH3>
              </CardHeader>
              <CardContent>
                <Paragraph className="max-w-full mb-6 break-all limit-text-3">
                  {project.description}
                </Paragraph>
                <Link className={buttonVariants({ variant: "link" })} href={`project/${project.id}`}>
                  Read more
                </Link>
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
        ))}
      </ul>
    </Section>
  )
}
