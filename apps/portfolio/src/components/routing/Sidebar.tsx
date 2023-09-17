import { PageTitle } from "ui"
import { NavLink } from "../ui/NavLink"

export const Sidebar = () => {
    return (
        // <div className="fixed top-[65px] bottom-0 w-[250px] py-4 px-3 bg-zinc-950">
        //   <ul>
        //     <li className="w-full">
        //       <NavLink className="w-full block flex gap-3 pl-3 pr-3 py-4 bg-projects bg-no-repeat bg-[5px] rounded-md hover:bg-zinc-900" href="/admin/projects">
        //         <Image className="bg-clip-text bg-gradient-to-r" alt="projects" src="/projects.svg" width={24} height={24} />
        //         Projects
        //       </NavLink>
        //     </li>
        //     <li className="w-full">
        //       <NavLink className="w-full block flex gap-3 pl-3 pr-3 py-4 bg-projects bg-no-repeat bg-[5px] rounded-md hover:bg-zinc-900" href="/admin/blog">
        //         <Image className="bg-clip-text bg-gradient-to-r" alt="projects" src="/projects.svg" width={24} height={24} />
        //         Blog
        //       </NavLink>
        //     </li>
        //   </ul>
        // </div>
        <aside className="w-68 bg-zinc-950 h-screen text-white p-6">
            <PageTitle className="mb-8">Dashboard</PageTitle>
            <nav>
                <NavLink
                    className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    href="/admin/projects"
                >
                    Projects
                </NavLink>
                <NavLink
                    className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    href="/admin/blog"
                >
                    Blog
                </NavLink>
                <NavLink
                    className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    href="/admin/technologies"
                >
                    Technologies
                </NavLink>
            </nav>
        </aside>
    )
}
