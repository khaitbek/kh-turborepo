import { services } from "@/data";
import Link from "next/link";
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle, Paragraph, TypographyH3, buttonVariants } from "ui";
import { cn } from "ui/lib/utils";

export function Services() {
  return (
    <section>
      <div className="container mx-auto">
        <ul className="grid grid-cols-[repeat(auto-fit,min(350px,100%))] justify-center gap-y-6 gap-x-4">
          {services.map(service => (
            <li key={service.title}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="limit-text-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={service.href} className={cn(buttonVariants({ variant: "outline" }))}>
                    {service.title}
                  </Link>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
