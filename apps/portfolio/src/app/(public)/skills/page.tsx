import { PageWrapper } from "@/components/loading/PageLoader"
import Skills from "@/components/ui/Skills"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Skills",
    description: "My skills",
}

const Page = () => {
    return (
        <PageWrapper>
            <Skills />
        </PageWrapper>
    )
}

export default Page
