"use client";
import {
  Command,
  CommandDialog,
  CommandEmpty, CommandInput, CommandItem, CommandList
} from "@/components/ui/command";
import { Chapter } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CommandGroup } from "cmdk";
import { useState } from "react";
import { Paragraph } from "ui";
import { Input, InputProps } from "./ui/input";
interface SearchTriggerInputProps extends InputProps {

}

export const SearchTriggerInput = (props: SearchTriggerInputProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chapters"],
    queryFn: async () => {
      return (await axios.get("https://api.quran.com/api/v4/chapters")).data
    }
  });
  const chapters = data?.chapters as Chapter[];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(data?.chapters);
  return (
    <>
      <Input onClick={() => setIsOpen(true)} className="mb-12" placeholder="What do you want to read?" name="chapter_name" {...props} />
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {isLoading && <Paragraph>Loading...</Paragraph>}
            <CommandGroup className="pt-4">
              {chapters?.map(chapter => (
                <CommandItem key={chapter.id}>
                  {chapter.id}. {chapter.name_simple}
                </CommandItem>
              ))}
              {JSON.stringify(chapters)}
            </CommandGroup>

          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}