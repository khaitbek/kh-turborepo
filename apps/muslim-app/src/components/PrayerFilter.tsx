"use client";
import { PRAYER_QUERY_KEY } from "@/constants";
import { REGIONS } from "@/constants/regions";
import { FilterBy, getPrayerTimes } from "@/utils/api";
import { dehydrate, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "ui";

export function PrayerFilter() {
  const queryClient = useQueryClient();
  const [filterBy, setFilterBy] = useState<FilterBy>("day");
  const [region, setRegion] = useState<typeof REGIONS[number]>("Toshkent");

  async function handleFilter() {
    const prayerTimes = await getPrayerTimes(filterBy, region);
    queryClient.setQueryData([PRAYER_QUERY_KEY], prayerTimes);
    dehydrate(queryClient);
  }

  useEffect(() => {
    console.log(filterBy, region);
    handleFilter();
  }, [filterBy, region]);

  return (
    <div className="grid gap-y-4 gap-x-6 items-center md:grid-cols-2">
      <Select onValueChange={async (value) => {
        setFilterBy(value as FilterBy);
      }}>
        <SelectTrigger>
          <SelectValue placeholder="Kun/Hafta/Oy" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>
              Kun, hafta, oyni tanlang
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
      <Select onValueChange={async (value) => {
        setRegion(value as typeof REGIONS[number]);
      }}>
        <SelectTrigger>
          <SelectValue placeholder="Hududni tanlang" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>
              Hududni tanlang
            </SelectLabel>
            {REGIONS.map(region => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </div>
  )
}