import { WEEKDAYS } from "@/constants/weekdays";

export interface Prayer {
  region: string;
  date: string;
  weekday: typeof WEEKDAYS;
  times: {
    tong_saharlik: string;
    quyosh: string;
    peshin: string;
    asr: string;
    shom_iftor: string;
    hufton: string;
  };
}

export interface DailyPrayerResponse extends Prayer {}
