"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, FC } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  activeLinkClass?: string;
}

export const NavLink: FC<NavLinkProps> = ({ children, className, activeLinkClass = "", href = "/" }) => {
  const pathname = usePathname();
  const linkClassName = href === pathname ? "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500" : "";
  return (
    <Link className={`${className} ${activeLinkClass} ${linkClassName}`} href={href}>
      {children}
    </Link>
  )
}
