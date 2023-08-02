import { Sidebar } from "@/components/routing/Sidebar";
import "ui/globals.css";
import "../globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="py-8 px-6 bg-zinc-950" >

      </header>
      <div className="flex gap-12">
        <Sidebar />
        <div className="ml-[300px] flex-grow p-12">
          {children}
        </div>
      </div>
    </>
  )
}
