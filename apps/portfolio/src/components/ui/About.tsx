import Image from "next/image"
import Link from "next/link"
import { buttonVariants, PageTitle, Paragraph } from "ui"
import { Section } from "./Section"

export const About = () => {
	return (
		<Section id="about">
			<div className="flex flex-col gap-12 justify-between items-center lg:flex-row">
				<div className="max-w-[650px]">
					<PageTitle className="uppercase from-white to-gray-500 tracking-widest text-[36px] md:text-[48px] lg:text-[60px]">
						About me
					</PageTitle>
					<Paragraph className="md:text-xl lg:text-2xl mb-6">
						I'm a fullstack developer who has a lot of passion for creating
						nice, accessible and effortless software that makes life easier. My
						journey began in the years when I was at high school, when I started
						learning to create simple websites and fell in love with the process
						When I'm not coding, you can find me exploring new art exhibitions,
						practicing chess, or indulging in my love for football. I believe
						that creative inspiration can be found anywhere and I am always
						looking for new ways to expand my horizons.
					</Paragraph>
					<Link
						className={buttonVariants({
							variant: "default",
							size: "lg",
						})}
						href="/#projects"
					>
						See my work
					</Link>
				</div>
				<Image
					className="rounded-md flex-1 w-full lg:max-w-[500px] lg:rounded-full"
					alt="Hayitbek Yusupov"
					src="/me.jpg"
					width={500}
					height={500}
					sizes="(max-width:768px) 300px 400px, (max-width:968px) 400px 500px"
				/>
			</div>
		</Section>
	)
}
