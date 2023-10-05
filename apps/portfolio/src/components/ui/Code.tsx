import { ComponentProps, FC } from "react"

export const Code: FC<ComponentProps<"code">> = ({ children }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  )
}