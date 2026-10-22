import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="group grid gap-4 border-t py-8 md:grid-cols-[10rem_1fr_auto] md:gap-8">
      <div className="text-sm text-muted-foreground">
        <p className="font-medium text-foreground">{project.company}</p>
        <p>{project.sector}</p>
      </div>
      <div className="min-w-0">
        <h3 className="text-2xl font-semibold leading-tight md:text-[1.7rem]">
          <Link to={`/projetos/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 max-w-2xl text-muted-foreground">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.impact.map((i) => (
            <Badge key={i}>{i}</Badge>
          ))}
        </div>
      </div>
      <Link
        to={`/projetos/${project.slug}`}
        className="inline-flex items-center gap-1 self-start text-sm font-medium text-accent hover:underline underline-offset-4"
        aria-label={`Ler o case: ${project.title}`}
      >
        Ler o case
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}
