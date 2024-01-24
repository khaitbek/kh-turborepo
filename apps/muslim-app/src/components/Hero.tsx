import { APP_DESCRIPTION, APP_NAME } from "@/constants";
import { ComponentProps } from "react";
import { Button, ButtonProps, PageTitle, Paragraph } from "ui";

interface ButtonAction extends ButtonProps {
  displayText?: string;
  as?: HTMLElement
}
interface HeroProps extends ComponentProps<"section"> {
  pageTitle: string;
  pageDescription: string;
  buttons: ButtonAction[]
}

const defaultButtonActions: ButtonAction[] = [
  { displayText: "Qur'on o'qish", variant: "default", size: "lg" },
  { displayText: "Namoz vaqtlari", variant: "secondary", size: "lg" }
]

export function Hero({ buttons = defaultButtonActions, pageTitle = APP_NAME, pageDescription = APP_DESCRIPTION, children }: Partial<HeroProps>) {
  return (
    <section className="hero py-[32px] md:py-[64px] lg:py-[96px] xl:py-[135px] 2xl:py-[150px] ">
      <div className="container mx-auto">
        <div className="grid">
          <div className="grid place-content-center place-items-center max-w-[736px] text-center mx-auto">
            <PageTitle as="h2" className="mb-6 text-[36px] md:text-[48px] lg:text-[60px]">
              {pageTitle}
            </PageTitle>
            {pageDescription ? <Paragraph className="md:text-[20px] mb-8">
              {pageDescription}
            </Paragraph> : null}
            {children}
            <div className="flex gap-4 items-center">
              {buttons.map(({ displayText, as = "button", ...props }) => (
                <Button key={crypto.randomUUID()} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
