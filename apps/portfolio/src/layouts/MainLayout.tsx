import { Footer } from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"
import { ComponentProps, FC } from "react"

export const MainLayout: FC<ComponentProps<"div">> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
