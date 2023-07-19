import { Footer, Header } from "@/components"
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
