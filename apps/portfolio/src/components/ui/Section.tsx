import { ComponentProps, FC } from "react"
import { Separator } from "./Separator"

export const Section: FC<ComponentProps<"section">> = ({ ...props }) => {
  return (
    <>
      <section className="py-[50px]" {...props}>
        <div className="container mx-auto">
          {props.children}
        </div>
      </section>
      <Separator />
    </>
  )
}
