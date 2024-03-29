import Image from "next/image"
import Link from "next/link"

interface LinkItem {
	href: string
	title: string
}

const links: LinkItem[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Work",
		href: "#work",
	},
	{
		title: "Blog",
		href: "/blog",
	},
]

export const Header = () => {
	return (
		<header className="py-6">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between gap-6 md:flex-row">
					<Link href="/">
						Blog by{" "}
						<Link
							style={{
								fontStyle: "italic",
							}}
							className="font-italic"
							href="https://github.com/khaitbek"
						>
							Hayitbek Yusupov
						</Link>
					</Link>
					<div className="flex gap-8 justify-center">
						<Link href="https://github.com/khaitbek" target="_blank">
							<Image
								className="w-auto h-auto max-h-[35px]"
								alt="Hayitbek Yusupov's Github"
								src="/github.svg"
								width={100}
								height={25}
								aria-hidden="true"
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/in/hayitbek-yusupov-a640a7226/"
							target="_blank"
						>
							<Image
								className="w-auto h-auto max-h-[35px]"
								alt="Hayitbek Yusupov's Linkedin"
								src="/linkedin.svg"
								width={100}
								height={25}
								aria-hidden="true"
							/>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
