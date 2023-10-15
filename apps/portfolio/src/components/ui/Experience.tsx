import { PageTitle, Paragraph, TypographyH3 } from "ui"
import { GradientHeading } from "./GradientHeading"
import { Section } from "./Section"

export function Experience() {
    const experience = [
        {
            position: "Fullstack Developer",
            startDate: "July 2023",
            about: "As fullstack developer I am responsible for building beautiful, accessible and effortless UI for expert.uz using a low-code tool called Platon which supports Vue.js. Sometimes, I might need to write some sql queries to provide APIs",
            company: "Realsoft",
        },
        {
            position: "Frontend Team Lead",
            startDate: "June 2023 - August 2023",
            about: "As fullstack developer I am responsible for building beautiful, accessible and effortless UI for expert.uz using a low-code tool called Platon which supports Vue.js. Sometimes, I might need to write some sql queries to provide APIs",
            company: "Melon",
        },
    ]
    return (
        <Section id="experience">
            <div className="flex items-center justify-center">
                <PageTitle className="uppercase from-white to-gray-500 tracking-widest text-[36px] md:text-[48px] lg:text-[60px]">
                    Experience
                </PageTitle>
            </div>
            <ul className="grid gap-4">
                {experience.map((item) => (
                    <li
                        className="pl-3 border-s-2 border-white"
                        key={item.company}
                    >
                        <div className="grid gap-4">
                            <div className="gap-1">
                                <TypographyH3>
                                    {item.position} |{" "}
                                    <span className="text-slate-400">
                                        {item.company}
                                    </span>
                                </TypographyH3>
                                <p>{item.startDate}</p>
                            </div>
                            <Paragraph>{item.about}</Paragraph>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
