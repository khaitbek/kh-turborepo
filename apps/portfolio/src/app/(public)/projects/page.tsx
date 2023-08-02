import { PageWrapper } from "@/components/loading/PageLoader";
import { Projects } from "@/components/ui/Projects";
import { getPosts } from "@/lib/api";
import getQueryClient from "@/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My coding projects",
}

const Page = () => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({ queryKey: ["projects"], queryFn: getPosts });
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <PageWrapper>
        <Projects />
      </PageWrapper>
    </Hydrate>
  )
}

export default Page;
