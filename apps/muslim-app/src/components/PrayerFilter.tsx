"use client";
import { PRAYER_QUERY_KEY } from "@/constants";
import { FilterBy, getPrayerTimes } from "@/utils/api";
import { dehydrate, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "ui";

export function PrayerFilter() {
  const queryClient = useQueryClient();
  const [filterBy, setFilterBy] = useState<FilterBy>("day");
  const router = useRouter();
  return (
    <div className="flex gap-6 items-center">
      <Select onValueChange={async (value) => {
        setFilterBy(value as FilterBy);
        const prayerTimes = await getPrayerTimes(value as FilterBy);
        queryClient.setQueryData([PRAYER_QUERY_KEY], prayerTimes);
        const dehydratedState = dehydrate(queryClient);
        console.log(dehydratedState.queries);
      }}>
        <SelectTrigger>
          <SelectValue placeholder={`${filterBy === "day" ? "Kunlik" : filterBy === "month" ? "Oylik" : "Haftalik"} namoz vaqtlari`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>
              Kun, hafta, oy, yilni tanlang
            </SelectLabel>
            <SelectItem value="day">
              Kunlik
            </SelectItem>
            <SelectItem value="week">
              Haftalik
            </SelectItem>
            <SelectItem value="month">
              Oylik
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}