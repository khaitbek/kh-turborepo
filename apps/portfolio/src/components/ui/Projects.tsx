import Link from "next/link"
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
import { Section } from "./Section"

export const Projects = () => {
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
		{
			id: 3,
			name: "Smart Agro",
			description:
				"A single all-in-one making the world of agriculturing better. We provide agriculture cooperative unions with tools like satellite views, land zoning, land cropping and many more!",
			technologies: ["Vue.js", "PostgreSQL", "Responsive Design", "Leaflet.js"],
			link: "https://kh.smart-agro.uz",
			sourceCode: null,
			coverImg:
				"https://ik.imagekit.io/khaitbek/Smart%20Agro/public/users_bg.jpeg?updatedAt=1698214585096",
		},
		{
			id: 4,
			name: "Smart Market",
			description:
				"An online e-commerce platform that includes everything you need to make your online purchases with ease!",
			technologies: [
				"React",
				"React Native",
				"Expo",
				"Typescript",
				"Tamagui",
				"TailwindCSS",
			],
			link: "https://kh.smart-market.uz",
			sourceCode: "https://github.com/khaitbek/smart-market-rn",
			coverImg:
				"https://ik.imagekit.io/khaitbek/Smart%20Agro/public/image.png?updatedAt=1702956921928",
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
						<Card className="flex flex-col justify-between" key={project.id}>
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
										{project.technologies.map((technology) => (
											<li key={technology}>
												<Button variant="destructive" size="sm">
													{technology}
												</Button>
											</li>
										))}
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
