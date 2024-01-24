import { Container, Hero, PrayerFilter, PrayerTable } from "@/components";
import { PRAYER_QUERY_KEY } from "@/constants";
import { BASE_URL } from "@/constants/api";
import getQueryClient from "@/providers/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "ui";

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: [PRAYER_QUERY_KEY], queryFn: async () => (await axios.get(BASE_URL)).data })
  const dehydratedState = dehydrate(queryClient);
  return (
    <>
      <Hero pageTitle="Namoz vaqtlari" pageDescription="Kunlik, oylik va yillik 5 vaqt namoz vaqtlarini kuzating. Namoz vaqtlari islom.uz saytining ochiq manbasiga asoslanib olingan" buttons={[]} />
      <section>
        <Container>
          <Hydrate state={dehydratedState}>
            <PrayerFilter />
            <PrayerTable />
          </Hydrate>
        </Container>
      </section>
    </>
  )
}
