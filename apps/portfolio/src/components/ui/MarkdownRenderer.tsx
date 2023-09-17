import "github-markdown-css/github-markdown.css"
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { stackoverflowDark,dark,docco,defaultStyle,vs,codepenEmbed,github,githubGist,googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs"
import * as shiki from "shiki"
import { cn } from "ui/lib/utils"

type MarkdownRendererProps = React.ComponentProps<typeof ReactMarkdown>

export async function MarkdownRenderer({
    className,
    ...props
}: MarkdownRendererProps) {
    const highlighter = await shiki.getHighlighter({ theme: "poimandres" })
    const theme = highlighter.getTheme()
    return (
        <ReactMarkdown
            remarkPlugins={[]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    if (children.join("").length > 20) {
                        return (
                            <SyntaxHighlighter
                                {...props}
                                style={stackoverflowDark}
                                // style={googlecode}
                                customStyle={{
                                    padding: ".5em 1em",
                                    fontSize: "18px",
                                    fontFamily: "Inter",
                                    marginBlock:".5rem"
                                }}
                                // language="typescript"
                            >
                                {String(children)}
                            </SyntaxHighlighter>
                        )
                    }
                    return (
                        <SyntaxHighlighter
                            {...props}
                            style={stackoverflowDark}
                            customStyle={{
                                padding: "5px",
                                display: "inline-flex",
                                marginBlock: "5px",
                                color: "rgb(136, 174, 206)",
                            }}
                            language="typescript"
                        >
                            {String(children)}
                        </SyntaxHighlighter>
                    )
                },
            }}
            className={cn("inline-block", className)}
            {...props}
        />
    )
}