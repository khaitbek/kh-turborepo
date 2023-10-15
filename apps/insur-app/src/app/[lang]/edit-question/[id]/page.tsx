import { QuestionForm } from "@/components/question-form"
import { Container } from "@/components/ui/container"
import { getSingleQuestion } from "@/lib/api"
import { getDictionary } from "@/lib/dictionary"
import { PageProps } from "@/types"
import Link from "next/link"
import { PageTitle, buttonVariants } from "ui"
import { cn } from "ui/lib/utils"
import { Locale } from "../../../../../i18n.config"

interface Props {
    params: {
        lang: Locale
        id: string
    }
}

export default async function Home({ params: { lang, id } }: Props) {
    const langInfo = await getDictionary(lang)
    const question = await getSingleQuestion(id)
    return (
        <section className="py-12" id="home">
            <Container>
                <Link
                    href="/"
                    className={cn(buttonVariants({ variant: "destructive" }))}
                >
                    {langInfo.navigation.back}
                </Link>
                <PageTitle className="mb-12 text-center">
                    {langInfo.navigation.edit}
                </PageTitle>
                <QuestionForm
                    editMode={true}
                    data={question}
                    langInfo={langInfo}
                />
            </Container>
        </section>
    )
}
