import Image from "next/image"
import Link from "next/link"
import { buttonVariants, Paragraph } from "ui"
import { GradientHeading } from "./GradientHeading"
import { Section } from "./Section"

export const About = () => {
  return (

    <Section>
      <div className="flex gap-12 justify-between items-center">
        <div className="max-w-[650px]">
          <GradientHeading className="mb-6" variant="bluebird" as="h2">
            I'm Hayitbek Yusupov
          </GradientHeading>
          <Paragraph className="text-2xl mb-6">
            I started my coding journey in 2021. It might seem that I'm a little newcomer here and you are absolutely right. But let me tell you, don't judge a book by its cover! I am not just a random coder. Here are the technologies of my choice
          </Paragraph>
          <Link className={buttonVariants({ variant: "default", size: "lg", className: "bg-sky-600 hover:bg-sky-800" })} href="#work">
            See my work
          </Link>
        </div>
        <Image className="rounded-md" alt="Hayitbek Yusupov" src="/me.jpg" width={450} height={500} sizes="(max-width:768px) 300px 400px, (max-width:968px) 400px 500px" />
      </div>
    </Section>

  )
}
