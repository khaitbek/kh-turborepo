import { ComponentProps } from "react"

interface Props extends ComponentProps<"div"> {}

export const Container = (props: Props) => {
    return (
        <div className="container mx-auto" {...props}>
            {props.children}
        </div>
    )
}
