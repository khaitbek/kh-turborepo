import { APP_DESCRIPTION, APP_NAME } from "@/constants";
import { Button, ButtonProps, PageTitle, Paragraph } from "ui";

interface ButtonAction extends ButtonProps {
  displayText: string;
}
interface HeroProps {
  pageTitle: string;
  pageDescription: string;
  buttons: ButtonAction[]
}

const defaultButtonActions: ButtonAction[] = [
  { displayText: "Qur'on o'qish", variant: "default", size: "lg" },
  { displayText: "Namoz vaqtlari", variant: "secondary", size: "lg" }
]

export function Hero({ buttons = defaultButtonActions, pageTitle = APP_NAME, pageDescription = APP_DESCRIPTION }: Partial<HeroProps>) {
  return (
    <section className="hero py-[32px] md:py-[64px] lg:py-[96px] xl:py-[135px] 2xl:py-[150px]">
      <div className="container mx-auto">
        <div className="grid">
          <div className="grid place-content-center place-items-center max-w-[736px] text-center mx-auto">
            <PageTitle className="mb-6 text-[36px] md:text-[48px] lg:text-[60px]">
              {pageTitle}
            </PageTitle>
            <Paragraph className="md:text-[20px] mb-8">
              {pageDescription}
            </Paragraph>
            <div className="flex gap-4 items-center">
              {buttons.map(({ displayText, ...props }) => (
                <Button key={displayText} {...props}>
                  {displayText}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
