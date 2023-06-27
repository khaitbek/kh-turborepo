import { ComponentProps } from "react";
import { cn } from "./lib/utils";

export function PageTitle({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ", className)} {...props}>
      {props.children}
    </h1>
  )
}

export function TypographyH3({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight ", className)}>
      {props.children}
    </h3>
  )
}