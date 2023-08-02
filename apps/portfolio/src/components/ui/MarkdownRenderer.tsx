import ReactMarkdown from "react-markdown"
import { cn } from "ui/lib/utils"

type MarkdownRendererProps = React.ComponentProps<typeof ReactMarkdown>

export function MarkdownRenderer({
  className,
  ...props
}: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className={cn(
        "prose dark:prose-invert prose-slate max-w-full",
        className
      )}
      {...props}
    />
  )
}