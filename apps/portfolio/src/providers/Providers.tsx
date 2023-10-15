import { ReactQueryProvider } from "./ReactQueryProvider"

const Providers = ({ children }: { children: any }) => {
    return <ReactQueryProvider>{children}</ReactQueryProvider>
}

export default Providers
