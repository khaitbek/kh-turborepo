import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
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
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}