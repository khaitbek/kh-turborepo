import { FC } from "react"
import { PuffLoader } from "react-spinners"

interface PageLoaderProps {}

export const PageLoader: FC<PageLoaderProps> = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <PuffLoader />
        </div>
    )
}
