import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  title,
  intro,
  children,
  className,
  id,
}: {
  title?: string
  intro?: ReactNode
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("gutter mx-auto max-w-6xl pt-20 md:pt-28", className)}>
      {title && <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>}
      {intro && <div className="mt-3 max-w-2xl text-muted-foreground">{intro}</div>}
      <div className={cn(title || intro ? "mt-10" : "")}>{children}</div>
    </section>
  )
}
