import Link from "next/link";
import { FC } from "react";
import { buttonVariants, Paragraph } from "ui";
import { GradientHeading } from "./GradientHeading";
import { Section } from "./Section";

interface HeroProps {
  title: string;
  subtitle: string;
  body: string;
};

export const Hero: FC<HeroProps> = ({ title, subtitle, body }) => {
  return (

    <Section className="py-[32px] md:py-[64px] lg:py-[96px] xl:py-[135px] 2xl:py-[150px]">
      <div className="grid">
        <div className="grid place-content-center place-items-center max-w-[736px] text-center mx-auto">
          <GradientHeading variant="barca" className="mb-6 uppercase tracking-widest text-[36px] md:text-[48px] lg:text-[60px]">
            {title}
          </GradientHeading>
          <Paragraph className="md:text-[20px] mb-8">
            {body}
          </Paragraph>
          <div className="flex gap-4 items-center">
            <Link id="#contact" className={buttonVariants({ variant: "destructive", size: "lg", className: "bg-barca" })} href="#contact" target="_blank">
              Contact me
            </Link>
            <Link className={buttonVariants({ variant: "secondary", size: "lg" })} href="https://docs.google.com/document/d/1EOuzjfVAI4l6Wdcr1uSK4Pgir5-fLe5lxMekA_9vb-o/edit" target="_blank">
              CV (Resume)
            </Link>
          </div>
        </div>
      </div>
    </Section>

  )
}
