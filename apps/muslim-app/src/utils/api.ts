import { BASE_URL } from "@/constants/api";
import { REGIONS } from "@/constants/regions";
import { Prayer } from "@/types";
import axios from "axios";

export type FilterBy = "day" | "week" | "month";

export async function getPrayerTimes(
  type: FilterBy = "day",
  region: (typeof REGIONS)[number]
): Promise<Prayer[]> {
  const REQUEST_URL =
    type === "month" ? "https://islomapi.uz/api/monthly" : BASE_URL;
  const params: {
    region: string;
    month?: number;
  } = {
    region,
  };
  if (type === "month") params.month = 4;
  const prayerTimes = (
    await axios.get(REQUEST_URL + (type === "month" ? "" : type), {
      params,
    })
  ).data;
  if (type === "day") return [await prayerTimes] as Prayer[];
  return (await prayerTimes) as Prayer[];
}
