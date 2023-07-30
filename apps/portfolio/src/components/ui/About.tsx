import Image from "next/image"
import Link from "next/link"
import { buttonVariants, Paragraph } from "ui"
import { GradientHeading } from "./GradientHeading"
import { Section } from "./Section"

export const About = () => {
  return (

    <Section>
      <div className="flex flex-col gap-12 justify-between items-center lg:flex-row">
        <div className="max-w-[650px]">
          <GradientHeading className="mb-6 uppercase tracking-widest" variant="barca" as="h2">
            About me
          </GradientHeading>
          <Paragraph className="text-2xl mb-6">
            Hi there! My name is Hayitbek and I'm from Uzbekistan! I am a fullstack Javascript developer. I started my coding journey in 2021. It might seem that I'm a little newcomer here and you are absolutely right. But let me tell you, don't judge a book by its cover! I am not just a random coder.
          </Paragraph>
          <Link className={buttonVariants({ variant: "default", size: "lg", className: "bg-barca" })} href="#work">
            See my work
          </Link>
        </div>
        <Image className="rounded-md" alt="Hayitbek Yusupov" src="/me.jpg" width={450} height={500} sizes="(max-width:768px) 300px 400px, (max-width:968px) 400px 500px" />
      </div>
    </Section>

  )
}
