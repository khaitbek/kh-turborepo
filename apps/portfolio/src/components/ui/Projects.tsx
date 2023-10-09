import {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    PageTitle,
    Paragraph,
    TypographyH3,
    buttonVariants,
} from "ui"
import { GradientHeading } from "./GradientHeading"
import { Section } from "./Section"
import Link from "next/link"

export const Projects = () => {
    //   const { data: projects, isLoading } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
    //   if (isLoading) return (
    //     <Section>
    //       <ul className="grid grid-cols-[repeat(auto-fit,min(350px,100%))] justify-center gap-x-6 gap-y-8">
    //         {Array(10).fill("").map(item => (
    //           <Skeleton className="bg-transparent" key={crypto.randomUUID()}>
    //             <Card className="bg-stone-950 border border-stone-950" >
    //               <div>
    //                 <CardHeader>
    //                   <Skeleton className="px-6 py-4 bg-stone-800"></Skeleton>
    //                 </CardHeader>
    //                 <CardContent>
    //                   <Skeleton className="px-6 py-14 bg-stone-800"></Skeleton>
    //                   <ul className="flex flex-wrap gap-x-4 gap-y-4 mb-6 mt-4 border-t border-stone-800 tracking-wider"></ul>
    //                   <Skeleton className="flex flex-wrap gap-x-4 gap-y-4 mt-4 border-t border-stone-800 bg-stone-800 py-14 tracking-wider">

    //                   </Skeleton>

    //                 </CardContent>
    //               </div>
    //             </Card>
    //           </Skeleton>
    //         ))}
    //       </ul>
    //     </Section>
    //   )
    const projects = [
        {
            id: 1,
            name: "Expert.uz",
            description:
                "A platform that has collected a lot of tools for professional activity, online learning, finding opportunities to start your professional career and more",
            technologies: [
                "Vue.js",
                "Javascript",
                "Low Code",
                "SQL",
                "TailwindCSS",
                "REST API",
                "PostgreSQL",
            ],
            link: "https://expert.uz",
            sourceCode: null,
            coverImg:
                "https://ik.imagekit.io/khaitbek/Projects/expertuz.jpg?updatedAt=1696524233943",
        },
        {
            id: 2,
            name: "Melon",
            description: "A single all-in-one platform for online education",
            technologies: [
                "React.js",
                "Next.js",
                "Typescript",
                "TailwindCSS",
                "NextAuth",
                "React Query",
            ],
            link: "https://github.com/khaitbek/melon-front",
            sourceCode: null,
            coverImg:
                "https://ik.imagekit.io/khaitbek/Projects/education.avif?updatedAt=1696524232053",
        },
    ]
    return (
        <>
            <Section id="projects" className="py-[100px]">
                <div className="flex items-center justify-center">
                    <PageTitle className="uppercase from-white to-gray-500 tracking-widest text-[36px] md:text-[48px] lg:text-[60px]">
                        Projects
                    </PageTitle>
                </div>
                <ul className="grid grid-cols-[repeat(auto-fill,min(350px,1fr)] justify-center gap-x-6 gap-y-8">
                    {projects?.map((project) => (
                        <Card
                            className="flex flex-col justify-between"
                            key={project.id}
                        >
                            <div>
                                <CardHeader>
                                    <TypographyH3 className=" font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                        {project.name}
                                    </TypographyH3>
                                </CardHeader>
                                <CardContent>
                                    <Paragraph className="max-w-full mb-6 break-all limit-text-3">
                                        {project.description}
                                    </Paragraph>
                                    {/* <Link
                                      className={buttonVariants({
                                          variant: "link",
                                      })}
                                      href={`/project/${project.id}`}
                                  >
                                      Read more
                                  </Link> */}
                                    <ul className="flex flex-wrap gap-x-4 gap-y-4 mt-4 border-t py-4 tracking-wider">
                                        {project.technologies.map(
                                            (technology) => (
                                                <li key={technology}>
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                    >
                                                        {technology}
                                                    </Button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </CardContent>
                            </div>
                            <CardFooter className="grid gap-4 pt-4 border-t md:flex md:flex-row">
                                {project.link && (
                                    <Link
                                        className={buttonVariants({
                                            variant: "secondary",
                                        })}
                                        href={project.link}
                                        target="_blank"
                                    >
                                        See the demo
                                    </Link>
                                )}
                                {project.sourceCode && (
                                    <Link
                                        className={buttonVariants({})}
                                        href={project.sourceCode!}
                                        target="_blank"
                                    >
                                        Source code
                                    </Link>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </ul>
            </Section>
        </>
    )
}
