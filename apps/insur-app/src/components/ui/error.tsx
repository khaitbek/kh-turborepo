import { ComponentType } from "react"
import { FallbackProps, useErrorBoundary } from "react-error-boundary"
import { Button, PageTitle, Paragraph } from "ui"

export const ErrorComponent: ComponentType<FallbackProps> = ({
    error,
    resetErrorBoundary,
}) => {
    const { resetBoundary } = useErrorBoundary()
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="container mx-auto">
                <div className="grid gap-4 items-center">
                    <PageTitle>Xatolik yuz berdi!</PageTitle>
                    <Paragraph>{error.message}</Paragraph>
                    <Button
                        onClick={() => {
                            resetBoundary()
                        }}
                    >
                        Refresh
                    </Button>
                </div>
            </div>
        </div>
    )
}
