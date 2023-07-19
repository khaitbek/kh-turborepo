import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  href: string;
  title: string;
}

const links: LinkItem[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Work",
    href: "#work"
  },
  {
    title: "Blog",
    href: "/blog"
  },
]

export const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex gap-8 justify-center">
          <Link href="https://github.com/khaitbek" target="_blank">
            <Image className="max-h-[60px]" alt="Hayitbek Yusupov's Github" src="/github.svg" width={100} height={25} aria-hidden="true" />
          </Link>
          <Link href="https://www.linkedin.com/in/hayitbek-yusupov-a640a7226/" target="_blank">
            <Image className="max-h-[60px]" alt="Hayitbek Yusupov's Linkedin" src="/linkedin.svg" width={100} height={25} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  )
}
