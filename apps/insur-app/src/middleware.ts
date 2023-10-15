import { NextRequest, NextResponse } from "next/server"

import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { i18n } from "../i18n.config"

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    console.log(languages, locales, i18n.defaultLocale)
    const locale = matchLocale(languages, locales, i18n.defaultLocale)
    console.log(locale)
    return locale
}

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("insurToken")?.value
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    const locale = getLocale(request)
    if (pathnameIsMissingLocale) {
        if (token && pathname === "/login") {
            return NextResponse.redirect(
                new URL(`/${locale}/login`, request.url)
            )
        }
        if (!token && pathname !== "/login") {
            return NextResponse.redirect(new URL(`/${locale}`, request.url))
        }
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        )
    }
    if (token && pathname.includes("/login")) {
        return NextResponse.redirect(new URL(`/`, request.url))
    }
    if (!token && !pathname.includes("/login")) {
        return NextResponse.redirect(new URL(`/${locale}/login`, request.url))
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}