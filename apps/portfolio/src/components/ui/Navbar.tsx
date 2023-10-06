import Link from "next/link"
import { buttonVariants } from "ui"

export const Navbar = () => {
  return (
      <nav className="w-full">
          <ol className="flex text-[12px] gap-1 justify-center sm:gap-3 sm:text-sm md:text-lg  md:gap-4 lg:gap-6">
              
              <li>
                  <a
                      className={buttonVariants({
                          variant: "link",
                          size: "sm",
                          className: "text-white",
                      })}
                      href="#about"
                  >
                      About
                  </a>
              </li>
              <li>
                  <a
                      className={buttonVariants({
                          variant: "link",
                          size: "sm",
                          className: "text-white",
                      })}
                      href="#projects"
                  >
                      Projects
                  </a>
              </li>
              <li>
                  <a
                      className={buttonVariants({
                          variant: "link",
                          size: "sm",
                          className: "text-white",
                      })}
                      href="#skills"
                  >
                      Skills
                  </a>
              </li>
              {/* <li>
                  <Link
                      className={buttonVariants({
                          variant: "link",
                          size: "sm",
                          className: "text-white",
                      })}
                      href="/blog"
                  >
                      Blog
                  </Link>
              </li> */}
          </ol>
      </nav>
  )
}
