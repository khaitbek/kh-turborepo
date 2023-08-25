import "github-markdown-css/github-markdown.css"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import * as shiki from "shiki"
import { cn } from "ui/lib/utils"

// @ea6_wake_up_you_need_money_f2e

type MarkdownRendererProps = React.ComponentProps<typeof ReactMarkdown>

export async function MarkdownRenderer({
  className,
  ...props
}: MarkdownRendererProps) {
  const highlighter = await shiki.getHighlighter({ theme: "poimandres" });
  const theme = highlighter.getTheme();
  return (
    <ReactMarkdown
      remarkPlugins={[]}
      components={{
        code({ node, inline, className, children, ...props }) {
          return (
            <SyntaxHighlighter
              {...props}
              style={stackoverflowDark}
              customStyle={{ padding: ".5em 1em" }}
              language="typescript"
            >
              {String(children)}
            </SyntaxHighlighter>
          )
        }
      }}
      className={cn(
        "inline-block",
        className
      )}
      {...props}
    />
  )
}