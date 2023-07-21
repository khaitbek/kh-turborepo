import { getPosts } from "@/lib/api";
import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";

import { MainLayout } from "./layouts";
import { Hero } from "@/components/ui/Hero";
import { About } from "@/components/ui/About";
import { Projects } from "@/components/ui/Projects";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["posts"], getPosts);
  const dehydratedState = dehydrate(queryClient);
  return (
    <MainLayout>
      <main>
        <Hydrate state={dehydratedState}>
          <Hero title="Hayitbek Yusupov" subtitle="Fullstack Developer" body="Hi there! I'm Hayitbek. I'm an aspiring fullstack developer who has just started his journey in web development. I really love doing different kinds of projects and I try to constantly learn the new technologies that are coming up every single day" />
          <About />
          <Projects />
        </Hydrate>
      </main>
    </MainLayout>
  )
}
