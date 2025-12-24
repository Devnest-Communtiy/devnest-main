"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border border-white/5 bg-white/5 rounded-xl overflow-hidden", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { isOpen?: boolean; onToggle?: () => void }
>(({ className, children, isOpen, onToggle, ...props }, ref) => (
    <div className="flex">
        <button
            ref={ref}
            onClick={onToggle}
            className={cn(
                "flex flex-1 items-center justify-between py-4 px-6 font-medium transition-all hover:bg-white/5 [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown
                className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
            />
        </button>
    </div>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "overflow-hidden text-sm transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        {...props}
    >
        <div className={cn("pb-4 pt-0 px-6 text-muted-foreground", className)}>{children}</div>
    </div>
))
AccordionContent.displayName = "AccordionContent"

// Simplified Compound Component for easy usage
export function SimpleAccordion({ items }: { items: { title: string; content: string }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <Accordion>
            {items.map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionTrigger
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        {item.title}
                    </AccordionTrigger>
                    <AccordionContent isOpen={openIndex === index}>
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
