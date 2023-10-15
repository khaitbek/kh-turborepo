import { getDictionary } from "@/lib/dictionary";
import { Locale } from "../../i18n.config";

export interface PageProps {
    params: { lang: Locale }
}

export type LangAsProp = Awaited<ReturnType<typeof getDictionary>>