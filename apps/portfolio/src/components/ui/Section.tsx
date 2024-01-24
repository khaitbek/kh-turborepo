import { ComponentProps, FC } from "react"

export const Section: FC<ComponentProps<"section">> = ({ ...props }) => {
	return (
		<>
			<section className="py-[50px]" {...props}>
				<div className="container mx-auto">{props.children}</div>
			</section>
		</>
	)
}
