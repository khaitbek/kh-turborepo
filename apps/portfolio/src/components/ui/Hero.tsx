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

export const Hero: FC<HeroProps> = ({ title, body }) => {
  return (
      <Section id="hero" className="py-[32px] md:pb-[64px] lg:pb-[96px]">
          <div className="grid">
              <div className="grid place-content-center place-items-center max-w-[736px] text-center mx-auto">
                  <GradientHeading className="mb-6 uppercase tracking-widest bg-gradient-to-r from-white to-gray-500 text-[36px] md:text-[48px] lg:text-[60px]">
                      {title}
                  </GradientHeading>
                  <Paragraph className="md:text-[20px] mb-8">{body}</Paragraph>
                  <div className="grid gap-6 grid-cols-2">
                      <Link
                          id="#contact"
                          className={buttonVariants({
                              variant: "default",
                              size: "lg",
                          })}
                          href="mailto:khaitbekdev@gmail.com"
                          target="_blank"
                      >
                          Contact me
                      </Link>
                      <Link
                          className={buttonVariants({
                              variant: "secondary",
                              size: "lg",
                          })}
                          href="https://docs.google.com/document/d/1EOuzjfVAI4l6Wdcr1uSK4Pgir5-fLe5lxMekA_9vb-o/edit?usp=sharing"
                          target="_blank"
                      >
                          CV 
                      </Link>
                  </div>
              </div>
          </div>
      </Section>
  )
}
