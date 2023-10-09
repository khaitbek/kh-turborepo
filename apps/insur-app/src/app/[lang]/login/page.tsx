import { LoginForm } from "@/components/login-form"
import { PageTitle } from "ui"
import { Locale } from "../../../../i18n.config"
import { getDictionary } from "@/lib/dictionary"

interface PageProps {
    params: { lang: Locale }
}

const LoginPage = async ({ params: { lang } }: PageProps) => {
    const langInfo = await getDictionary(lang)
    const { navigation:{login}, form, table,page } = langInfo
    return (
        <div className="container mx-auto">
            <PageTitle className="my-12">{login}</PageTitle>
            <LoginForm langInfo={langInfo} />
        </div>
    )
}

export default LoginPage
