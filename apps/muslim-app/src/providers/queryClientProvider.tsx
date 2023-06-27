"use client";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ComponentProps, useState } from "react"

export function HydrateQueryClientProvider({ children }: ComponentProps<"div">) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        {children}
      </Hydrate>
    </QueryClientProvider>
  )
}