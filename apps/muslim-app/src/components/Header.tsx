import { services } from "@/data";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
  NavigationMenuTrigger
} from "ui/navigation-menu";

export function Header() {
  return (
    <header className="px-4 py-6">
      <div className="container">
        <div className="flex justify-between items-center gap-12">
          <Link className="dark:text-white" href="/home">
            <img className="w-[105px] h-[55px]" src="/logo/logo.svg" width="105" height="35" alt="Muslim App - musulmonlar uchun namoz vaqtini kuzatish, Qur'on o'qish, kundalik tasbehlarni sanash va azon eshitishga mo'ljallangan platforma." />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Xizmatlar</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid px-4 py-4 w-[200px] left-0">
                    {services.map(service => (
                      <NavigationMenuLink key={service.title} href={service.href} title={service.title}>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}