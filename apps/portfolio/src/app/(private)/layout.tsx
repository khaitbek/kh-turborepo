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
          <div className="flex gap-12">
              <Sidebar />
              <div className="flex-grow p-12">{children}</div>
          </div>
      </>
  )
}
