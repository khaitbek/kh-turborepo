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
  console.log(projects);
  return (
    <Section className="py-[100px]">
      <GradientHeading as="h2" className="mb-12 text-white text-center block">
        Projects
        <span className="text-white inline-block ml-4">
          ⚒️
        </span>
      </GradientHeading>
      <ul className="grid grid-cols-[repeat(auto-fit,min(350px,100%))] justify-center gap-x-6 gap-y-8">
        {projects?.map(project => (
          <Card key={project.id as any}>
            <CardHeader>
              <TypographyH3>
                {project.name}
              </TypographyH3>
            </CardHeader>
            <CardContent>
              <Paragraph className="max-w-full mb-6 break-all limit-text-3">
                {project.description}
              </Paragraph>
              <ul className="flex flex-wrap gap-6">
                {/* @ts-ignore */}
                {project.technologies.split(" ").map(technology => (
                  <li key={technology}>
                    <Button variant="destructive" size="sm" >
                      {technology}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 md:flex-row">
              <Link className={buttonVariants({ variant: "default" })} href={project.link!} target="_blank">
                Visit
              </Link>
              <Link className={buttonVariants({ variant: "secondary" })} href={project.sourceCode!} target="_blank">
                Source code
              </Link>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
