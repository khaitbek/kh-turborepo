"use client";
import { getPosts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, Skeleton, TypographyH3 } from "ui";
import { GradientHeading } from "./GradientHeading";
import { Section } from "./Section";

interface Post {
  title: string;
  body: string;
}

export const Projects = () => {
  const { data: posts, isLoading } = useQuery<Post[]>({ queryKey: ['posts'], queryFn: getPosts });
  if (isLoading) return (
    <Skeleton>
      <TypographyH3>
        Loading
      </TypographyH3>
    </Skeleton>
  )
  return (
    <Section className="py-[100px]">
      <GradientHeading as="h2" className="mb-12 text-white text-center block">
        Projects
        <span className="text-white inline-block ml-4">
          ⚒️
        </span>
      </GradientHeading>
      <ul className="grid grid-cols-[repeat(auto-fit,min(350px,100%))] justify-center gap-x-6 gap-y-8">
        {posts?.map(post => (
          <Card key={post.title}>
            <CardHeader>
              {post.title}
            </CardHeader>
            <CardContent>
              {post.body}
            </CardContent>
          </Card>
        ))}
      </ul>
    </Section>
  )
}
