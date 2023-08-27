import { LoginForm } from "@/components/login-form"
import { PageTitle } from "ui"
import { Locale } from "../../../../i18n.config"
import { getDictionary } from "@/lib/dictionary"

interface PageProps {
    params: { lang: Locale }
}

const LoginPage = async ({ params: { lang } }: PageProps) => {
    const langInfo = await getDictionary(lang)
    const { navigation, form, table } = langInfo
    return (
        <div className="container mx-auto">
            <PageTitle className="my-12">Tizimga kiring!</PageTitle>
            <LoginForm langInfo={langInfo} />
        </div>
    )
}

export default LoginPage
