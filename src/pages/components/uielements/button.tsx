import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center w-full justify-center rounded-md mt-3 text-lg font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-blue-950 dark:focus-visible:ring-blue-800",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-blue-50 hover:bg-blue-900/90 dark:bg-blue-50 dark:text-blue-900 dark:hover:bg-blue-50/90",
        destructive:
          "bg-red-500 text-blue-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
        outline:
          "border border-blue-200 bg-white hover:bg-blue-100 hover:text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:hover:bg-blue-800 dark:hover:text-blue-50",
        secondary:
          "bg-blue-100 text-blue-900 hover:bg-blue-100/80 dark:bg-blue-800 dark:text-blue-50 dark:hover:bg-blue-800/80",
        ghost: "hover:bg-blue-100 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-50",
        link: "text-blue-900 underline-offset-4 hover:underline dark:text-blue-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
