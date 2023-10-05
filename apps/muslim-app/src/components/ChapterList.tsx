"use client";
import { ChapterListResponse } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ComponentProps } from 'react';
import { Card, CardHeader } from "ui";

export interface ChapterListProps extends ComponentProps<"ul"> {

}
export const ChapterList = (props: ChapterListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chapters"],
    queryFn: async (): Promise<ChapterListResponse> => {
      return await (await axios.get("https://api.quran.com/api/v4/chapters")).data
    }
  });
  const chapters = data?.chapters;
  return (
    <ul className="grid grid-cols-1 justify-center gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
      {chapters?.map(chapter => (
        <li key={chapter.id}>
          <Card className="cursor-pointer hover:bg-stone-900">
            <CardHeader>
              <div className="flex gap-8">
                <span>
                  {chapter.id}
                  
                </span>
                <p>
                  {chapter.name_simple}
                </p>
              </div>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  )
}