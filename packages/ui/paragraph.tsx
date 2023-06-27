import { ComponentProps } from "react";
import { cn } from "./lib/utils";

export function Paragraph({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("leading-7 text-gray-400 mt-0 ", className)} {...props}>
      {props.children}
    </p>
  )
}