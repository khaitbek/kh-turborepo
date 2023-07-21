import Image from "next/image"
import { NavLink } from "../ui/NavLink"

export const Sidebar = () => {
  return (
    <div className="fixed top-[65px] bottom-0 w-[250px] py-4 px-3 bg-zinc-950">
      <ul>
        <li className="w-full">
          <NavLink className="w-full block flex gap-3 pl-3 pr-3 py-4 bg-projects bg-no-repeat bg-[5px] rounded-md hover:bg-zinc-900" href="/admin/projects">
            <Image className="bg-clip-text bg-gradient-to-r" alt="projects" src="/projects.svg" width={24} height={24} />
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
