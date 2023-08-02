import Link from "next/link"
import { buttonVariants } from "ui"

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex text-[12px] gap-1 justify-center sm:gap-3 sm:text-sm md:text-lg md:justify-start  md:gap-4 lg:gap-6">
        <li>
          <Link className={buttonVariants({ variant: "link", size: "sm", className: "text-white" })} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={buttonVariants({ variant: "link", size: "sm", className: "text-white" })} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={buttonVariants({ variant: "link", size: "sm", className: "text-white" })} href="/projects">
            Projects
          </Link>
        </li>
        <li>
          {/* <Link className={buttonVariants({ variant: "link", size: "sm", className: "text-white" })} href="/blog">
            Blog
          </Link> */}
        </li>
      </ul>
    </nav>
  )
}
