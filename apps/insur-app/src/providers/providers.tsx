"use client"

import { ErrorComponent } from "@/components/ui/error"
import { PageLoader } from "@/components/ui/page-loader"
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query"
import { ReactNode, Suspense, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"

export default function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <Suspense fallback={<PageLoader />}>
            <ErrorBoundary FallbackComponent={ErrorComponent}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate>{children}</Hydrate>
                </QueryClientProvider>
            </ErrorBoundary>
        </Suspense>
    )
}
