import { ComponentProps } from "react";
import { cn } from "./lib/utils";

interface PageTitleProps extends ComponentProps<"h1"> {
  as?: any;
}

export function PageTitle({ className, as = "h1", ...props }: PageTitleProps) {
  const Comp = as || "h1"
  return (
    <Comp className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ", className)} {...props}>
      {props.children}
    </Comp>
  )
}

export function TypographyH3({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight ", className)}>
      {props.children}
    </h3>
  )
}