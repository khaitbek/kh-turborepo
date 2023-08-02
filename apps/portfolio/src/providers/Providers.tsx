import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryProvider } from "./ReactQueryProvider";

const Providers = ({ children }: { children: any }) => {
  return (
    <ReactQueryProvider>
      <ClerkProvider>
        {children}
      </ClerkProvider>
    </ReactQueryProvider>
  )
}

export default Providers;
