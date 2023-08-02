

import { Paragraph } from "ui"
import { LayoutWrapper } from "../loading/LayoutLoader"

export const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto">
        <LayoutWrapper>
          <Paragraph className="text-center">
            Developed by khaitbek
          </Paragraph>
        </LayoutWrapper>
      </div>
    </footer>
  )
}
