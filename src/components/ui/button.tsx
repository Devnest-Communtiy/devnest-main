import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-primary to-[#FFAA40] text-primary-foreground shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.6)] hover:brightness-110",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
                outline:
                    "border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-foreground hover:border-primary/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-white/5 hover:text-accent",
                link: "text-primary underline-offset-4 hover:underline",
                glass: "glass text-foreground hover:bg-white/10 border-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
            },
            size: {
                default: "h-11 px-6 py-2 rounded-full",
                sm: "h-9 rounded-full px-4",
                lg: "h-12 rounded-full px-8 text-base",
                icon: "h-11 w-11 rounded-full",
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
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
