import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        primary: "relative bg-gradient-to-r from-[#A17CDD] to-[#A17CDD] text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden",
        outline:
          "border border-input bg-background text-[#3D377A] hover:bg-accent hover:text-white",
        secondary:
          "bg-white text-[#3D377A] hover:bg-[#A17CDD] hover:text-white",
        ghost: "hover:bg-accent hover:text-[#A17CDD]",
        link: "text-[#A17CDD] underline-offset-4 hover:underline",
        nav: "text-[#3D377A] hover:text-white transition-colors duration-200",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 py-3 rounded-full",
        sm: "h-9 rounded-full px-3",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isPrimary = variant === "primary"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isPrimary && (
          <span
            className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.05) 100%)",
              mixBlendMode: "screen",
              opacity: 0.7,
            }}
            aria-hidden="true"
          />
        )}
        <span className={isPrimary ? "relative z-10" : undefined}>{props.children}</span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
