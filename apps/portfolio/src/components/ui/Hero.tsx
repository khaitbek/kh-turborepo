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
              <div className="grid gap-8 place-content-center place-items-center max-w-[736px] text-center mx-auto md:gap-10 lg:gap-12 xl:gap-14">
                  <div>
                      <GradientHeading className="uppercase tracking-widest bg-gradient-to-r from-white to-gray-500 text-[36px] md:text-[48px] lg:text-[60px]">
                          {title}
                      </GradientHeading>
                      <Paragraph className="md:text-xl lg:text-2xl">{body}</Paragraph>
                  </div>
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
                  <ol className="flex gap-4 flex-wrap [&>*]:flex-1">
                      <li>
                          <a href="https://github.com/khaitbek" target="_blank">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="62"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      fill="currentColor"
                                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                  />
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://www.youtube.com/channel/UCQYRaNgKXpSgnTNMJm5bBNA"
                              target="_blank"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="62"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      fill="currentColor"
                                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                  />
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://www.linkedin.com/in/hayitbek-yusupov-a640a7226/"
                              target="_blank"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="62"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      fill="currentColor"
                                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                  />
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a
                              href="https://www.linkedin.com/in/hayitbek-yusupov-a640a7226/"
                              target="_blank"
                          >
                              <svg
                                  width="32"
                                  height="62"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      fill="currentColor"
                                      d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z"
                                  />
                              </svg>
                          </a>
                      </li>
                  </ol>
              </div>
          </div>
      </Section>
  )
}
