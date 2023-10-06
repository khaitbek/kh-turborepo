import Image from "next/image"
import Link from "next/link"
import { buttonVariants, Paragraph } from "ui"
import { GradientHeading } from "./GradientHeading"
import { Section } from "./Section"

export const About = () => {
  return (
      <Section id="about">
          <div className="flex flex-col gap-12 justify-between items-center lg:flex-row">
              <div className="max-w-[650px]">
                  <GradientHeading
                      className="mb-6 uppercase tracking-widest bg-gradient-to-r from-white to-gray-500"
                      as="h2"
                  >
                      About me
                  </GradientHeading>
                  <Paragraph className="md:text-xl lg:text-2xl mb-6">
                      I'm a fullstack developer who has a lot of passion for
                      creating nice, accessible and effortless software that
                      makes life easier. My journey began in the years when I
                      was at high school, when I started learning to create
                      simple websites and fell in love with the process When I'm
                      not coding, you can find me exploring new art exhibitions,
                      practicing chess, or indulging in my love for football. I
                      believe that creative inspiration can be found anywhere
                      and I am always looking for new ways to expand my
                      horizons.
                  </Paragraph>
                  <Link
                      className={buttonVariants({
                          variant: "default",
                          size: "lg",
                      })}
                      href="/projects"
                  >
                      See my work
                  </Link>
              </div>
              <Image
                  className="rounded-md"
                  alt="Hayitbek Yusupov"
                  src="/me.jpg"
                  width={450}
                  height={500}
                  sizes="(max-width:768px) 300px 400px, (max-width:968px) 400px 500px"
              />
          </div>
      </Section>
  )
}
