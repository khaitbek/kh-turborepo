import { ComponentProps } from "react";
import { cn } from "ui/lib/utils";

export function Container({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("container mx-auto", className)} {...props}>
      {children}
    </div>
  )
}
