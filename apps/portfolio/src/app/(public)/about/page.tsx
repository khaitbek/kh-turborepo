import { PageWrapper } from "@/components/loading/PageLoader";
import { About } from "@/components/ui/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "Hi there! My name is Hayitbek and I'm from Uzbekistan! I am a fullstack Javascript developer. I started my coding journey in 2021. It might seem that I'm a little newcomer here and you are absolutely right. But let me tell you, don't judge a book by its cover! I am not just a random coder.",
}

const Page = () => {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  )
}

export default Page;
