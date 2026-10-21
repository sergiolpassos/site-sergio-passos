import { projects } from "@/data/profile"
import { ProjectRow } from "@/components/ProjectRow"

export default function Projects() {
  return (
    <section className="gutter mx-auto max-w-6xl pt-12 md:pt-20">
      <h1 className="text-5xl font-semibold leading-tight md:text-6xl">Projetos</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Quatro cases de fases diferentes da carreira: da engenharia de produto com parceiros internacionais à transformação ágil
        em áreas de tecnologia do varejo.
      </p>
      <div className="mt-12 border-b">
        {projects.map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
