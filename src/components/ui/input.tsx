import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(255,122,0,0.1)]",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

interface FloatingLabelInputProps extends InputProps {
    label: string;
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
    ({ className, label, id, ...props }, ref) => {
        return (
            <div className="relative group">
                <Input
                    ref={ref}
                    id={id}
                    className={cn("peer pt-6 pb-2 h-14", className)}
                    placeholder=" "
                    {...props}
                />
                <label
                    htmlFor={id}
                    className="absolute left-4 top-4 z-10 origin-[0] -translate-y-2.5 scale-75 transform text-muted-foreground duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-primary pointer-events-none"
                >
                    {label}
                </label>
            </div>
        )
    }
)
FloatingLabelInput.displayName = "FloatingLabelInput"

export { Input, FloatingLabelInput }
