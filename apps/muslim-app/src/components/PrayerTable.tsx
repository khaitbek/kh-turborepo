"use client";

import { PRAYER_QUERY_KEY, TIMES } from "@/constants";
import { BASE_URL } from "@/constants/api";
import { Prayer } from "@/types";
import { getPrayerTimes } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Paragraph, Skeleton, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "ui";

export function PrayerTable() {
  const { data, isLoading } = useQuery<Prayer[]>({ queryKey: [PRAYER_QUERY_KEY], queryFn: async () => await getPrayerTimes("day", "Toshkent") });
  if (isLoading) return (
    <>
      <Table className="my-12">
        <TableHeader>
          <TableRow>
            <TableHead>
              Sana
            </TableHead>
            <TableHead>
              Bomdod
            </TableHead>
            <TableHead>
              Quyosh
            </TableHead>
            <TableHead>
              Peshin
            </TableHead>
            <TableHead>
              Asr
            </TableHead>
            <TableHead>
              Shom
            </TableHead>
            <TableHead>
              Xufton
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="animate-pulse">
              <Skeleton>
                <Paragraph className="py-6"></Paragraph>
              </Skeleton>
            </TableCell>
            <TableCell className="animate-pulse">
              <Skeleton>
                <Paragraph className="py-6"></Paragraph>
              </Skeleton>
            </TableCell>
            <TableCell className="animate-pulse">
              <Skeleton>
                <Paragraph className="py-6"></Paragraph>
              </Skeleton>
            </TableCell>
            <TableCell className="animate-pulse">
              <Skeleton>
                <Paragraph className="py-6"></Paragraph>
              </Skeleton>
            </TableCell>
            <TableCell className="animate-pulse">
              <Skeleton>
                <Paragraph className="py-6"></Paragraph>
              </Skeleton>
            </TableCell>
            <TableCell className="animate-pulse">
              <Skeleton>
                <Paragraph className="py-6"></Paragraph>
              </Skeleton>
            </TableCell>
            <TableCell className="animate-pulse">
              <Skeleton>
                <Paragraph className="py-6"></Paragraph>
              </Skeleton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
  return (
    <>
      <Table className="my-12">
        <TableHeader>
          <TableRow>
            <TableHead>
              Sana
            </TableHead>
            <TableHead>
              Bomdod
            </TableHead>
            <TableHead>
              Quyosh
            </TableHead>
            <TableHead>
              Peshin
            </TableHead>
            <TableHead>
              Asr
            </TableHead>
            <TableHead>
              Shom
            </TableHead>
            <TableHead>
              Xufton
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map(info => (
            <TableRow key={info.date}>
              <TableCell>
                {info.date.split(",")[0].split("T")[0]}
              </TableCell>
              <TableCell>
                {info.times.tong_saharlik}
              </TableCell>
              <TableCell>
                {info.times.quyosh}
              </TableCell>
              <TableCell>
                {info.times.peshin}
              </TableCell>
              <TableCell>
                {info.times.asr}
              </TableCell>
              <TableCell>
                {info.times.shom_iftor}
              </TableCell>
              <TableCell>
                {info.times.hufton}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
