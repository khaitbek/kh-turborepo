import { About } from "@/components/ui/About"
import { Articles } from "@/components/ui/Articles"
import { Experience } from "@/components/ui/Experience"
import { Hero } from "@/components/ui/Hero"
import { Projects } from "@/components/ui/Projects"
import Skills from "@/components/ui/Skills"

export default async function Home() {
    return (
        <>
            <Hero
                title="Hayitbek Yusupov"
                subtitle="Fullstack Developer"
                body="Hi there! My name is Hayitbek and I'm from Uzbekistan! I’m
                      a fullstack Javascript developer who loves making people’s
                      life easier by creating accessible, beautiful and
                      user-friendly web applications, websites and mobile
                      applications"
            />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Articles />
        </>
    )
}
