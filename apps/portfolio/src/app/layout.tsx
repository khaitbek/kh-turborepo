import { Header } from "@/components/ui/Header"
import { Toaster } from "@/components/ui/toaster"
import Providers from "@/providers/Providers"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { PuffLoader } from "react-spinners"
import "ui/globals.css"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Blog by Hayitbek Yusupov",
	description: "A personal blog by Hayitbek Yusupov",
	openGraph: {
		title: "Blog by Hayitbek Yusupov",
		description: "A personal blog by Hayitbek Yusupov",
		images: ["https://avatars.githubusercontent.com/u/69072537?v=4"],
	},
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className + " dark"}>
				<Suspense
					fallback={
						<div className="h-screen flex items-center justify-center">
							<PuffLoader />
						</div>
					}
				>
					<Providers>
						<Header />
						<main>{children}</main>
					</Providers>
					<Toaster />
				</Suspense>
			</body>
		</html>
	)
}
