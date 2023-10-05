import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, FC } from "react";
import { PageTitle } from "ui";

const gradientHeadingVariants = cva("inline-block font-bold text-transparent  bg-clip-text bg-gradient-to-r", {
  variants: {
    variant: {
      default: "from-pink-500 to-indigo-600",
      indigo: "from-blue-600 via-green-500 to-indigo-400",
      fire: " from-red-500 to-yellow-400",
      sunset: " from-red-500 to-amber-500",
      dangerose: " from-red-700 to-blue-500",
      bluebird: " from-cyan-300 to-blue-500",
      barca: "from-[#cd122d] to-[#154284]"
    }
  },
  defaultVariants: {
    variant: "sunset"
  }
})

interface GradientHeadingProps extends VariantProps<typeof gradientHeadingVariants>, ComponentProps<"h1"> {
  as?: any;
}
export const GradientHeading: FC<GradientHeadingProps> = ({ variant, className, children, as = "h1", ...props }) => {
  return (
    <PageTitle as={as} className={cn(gradientHeadingVariants({ variant, className }))}>
      {children}
    </PageTitle>
  )
}
