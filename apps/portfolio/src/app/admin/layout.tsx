import { Sidebar } from "@/components/routing/Sidebar";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import "ui/globals.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-8 px-6 bg-zinc-950" >

        </header>
        <div className="flex gap-12">
          <Sidebar />
          <div className="ml-[300px] flex-grow p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
