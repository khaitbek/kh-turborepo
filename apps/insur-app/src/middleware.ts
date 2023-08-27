import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("insurToken")?.value
    // const verifiedToken =
    //     token && (await verifyAuth(token).catch((err) => console.log(err)))
    if (req.nextUrl.pathname.startsWith("/login") && !token) return
    if (req.nextUrl.pathname.startsWith("/login") && token) {
        return NextResponse.redirect(new URL("/", req.url))
    }
    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
