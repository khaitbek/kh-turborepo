import { GradientHeading } from "./GradientHeading"

/**
 * v0 by Vercel Labs.
 * @see https://v0.dev/t/0W13RkH
 */
export default function Skills() {
    return (
        <section className="w-full py-[50px]  bg-black">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center">
                        <div className="space-y-2">
                            <GradientHeading
                                className="mb-6 uppercase tracking-widest bg-gradient-to-r from-white to-gray-500"
                                as="h2"
                            >
                                Skills
                            </GradientHeading>
                        </div>
                        <div className="w-full max-w-full space-y-4 mx-auto">
                            <ul
                                className="grid grid-cols-[repeat(auto-fit,min(300px,100%))] gap-8 justify-center"
                                role="list"
                            >
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        Javascript
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        Javascript has been my beloved language
                                        since I started coding. I really loved
                                        the syntax of it because it was similar
                                        to C which is the first programming
                                        language I learned
                                    </p>
                                </li>
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        Typescript
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        I am a Typescript wizard. I can't
                                        imagine any of my project whether it is
                                        a small todo-list project or a large
                                        real-world application not using
                                        Typescript. Not only it gives me the
                                        best developer experience, but it makes
                                        me a better developer
                                    </p>
                                </li>
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        React
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        React.js was the first library I learned
                                        after I had a real close bone with
                                        Javascript. I love React so much and I'm
                                        glad that I have been using it for so
                                        long!
                                    </p>
                                </li>
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        Next.js
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        Next.js was the first ever framework
                                        that I have falled deeply and madly in
                                        love with. It is always a go to option
                                        whenever the ball is in my court when I
                                        am the one who decides to organize
                                        projects
                                    </p>
                                </li>
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        Vue.js
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        After spending enough time with React &
                                        Next.js I decided to give a try to
                                        Vue.js. I am not that good familiar with
                                        it but I'm enjoying more and more of it
                                    </p>
                                </li>
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        Node.js
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        These days, you can't find your place if
                                        you're just a frontend or a backend
                                        developer. You gotta learn both of them
                                        to make yourself outstanding
                                    </p>
                                </li>
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        SQL
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        SQL is a whole other world. You have to
                                        have great SQL skills if you want to be
                                        a fullstack developer.
                                    </p>
                                </li>
                                <li
                                    role="listitem"
                                    className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-bold text-white">
                                        Low-Code
                                    </h3>
                                    <p className="text-zinc-200 dark:text-zinc-100">
                                        Low-Code platforms are believed to be
                                        the tomorrow. Currently, I am a part of
                                        a team that's building real-world
                                        projects in a low-code platform which
                                        supports Vue.js on the frontend and SQL
                                        on the backend.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
