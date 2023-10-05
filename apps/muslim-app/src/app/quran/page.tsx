import { Hero } from "@/components";
import { ChapterList } from "@/components/ChapterList";
import { SearchTriggerInput } from "@/components/SearchTriggerInput";
import getQueryClient from "@/providers/getQueryClient";
import { getAllChapters } from "@/utils/api";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import Link from "next/link";

const QuranPage = () => {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({ queryKey: ["chapters"], queryFn: getAllChapters });
  const dehydratedState = dehydrate(queryClient);
  return (
    <>
      <Hero pageTitle="Holy Qur'an" pageDescription="" buttons={[
        {
          children: (
            <Link href="/surah-yaseen">
              Yaseen
            </Link>
          )
        },
        {
          children: (
            <Link href="/surah-al-mulk">
              Al Mulk
            </Link>
          )
        },
        {
          children: (
            <Link href="/surah-al-kahf">
              Al Kahf
            </Link>
          )
        },
        {
          children: (
            <Link href="/surah-al-waqiah">
              Al Waqi'ah
            </Link>
          )
        },
      ]}>
        <Hydrate state={dehydratedState}>
          <SearchTriggerInput />
          <ChapterList />
        </Hydrate>
      </Hero>
    </>
  )
}

export default QuranPage;
