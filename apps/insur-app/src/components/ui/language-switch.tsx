"use client"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "ui"
import { LangAsProp } from "@/types"
import { ComponentProps } from "react"
import { usePathname, useRouter } from "next/navigation"
import { i18n } from "../../../i18n.config"

interface LanguageSwitchProps
    extends Omit<
        ComponentProps<"select">,
        "lang" | "defaultValue" | "value" | "dir"
    > {
    lang: LangAsProp
}

export const LanguageSwitch = ({ lang, ...props }: LanguageSwitchProps) => {
    const router = useRouter()
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/"
        const segments = pathName.split("/")
        segments[1] = locale
        return segments.join("/")
    }
    return (
        <div className="container mx-auto py-6">
            <Select
                onValueChange={(val) => router.push(redirectedPathName(val))}
                {...props}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={lang.chooseLang} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {/* <SelectLabel>Fruits</SelectLabel> */}
                        <SelectItem value="uz">O'zbekcha</SelectItem>
                        <SelectItem value="ru">Русский</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
