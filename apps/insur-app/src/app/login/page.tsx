import { LoginForm } from "@/components/login-form"
import { PageTitle } from "ui"

interface PageProps {}

const LoginPage = (props: PageProps) => {
    return (
        <div className="container mx-auto">
            <PageTitle className="my-12">Tizimga kiring!</PageTitle>
            <LoginForm />
        </div>
    )
}

export default LoginPage
