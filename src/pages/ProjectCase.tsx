import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react"

import { projects } from "@/data/profile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NotFound from "./NotFound"

function LeadTimeChart({ before, after, label }: { before: string; after: string; label: string }) {
  const b = parseFloat(before)
  const a = parseFloat(after)
  return (
    <figure className="rounded-xl border bg-card p-6 md:p-8">
      <figcaption className="text-sm text-muted-foreground">Antes e depois: {label}</figcaption>
      <div className="mt-5 space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span>Antes</span>
            <span className="font-medium tabular-nums">{before}</span>
          </div>
          <div className="mt-1.5 h-4 rounded-sm bg-phase-1" style={{ width: "100%" }} />
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <span>Depois</span>
            <span className="font-medium tabular-nums text-accent">{after}</span>
          </div>
          <div className="mt-1.5 h-4 rounded-sm bg-accent" style={{ width: `${(a / b) * 100}%` }} />
        </div>
      </div>
    </figure>
  )
}

export default function ProjectCase() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />
  const p = projects[index]
  const next = projects[(index + 1) % projects.length]

  const facts = [
    ["Período", p.period],
    ["Empresa", p.company],
    ["Setor", p.sector],
    ["Meu papel", p.role],
    ...(p.partners ? [["Parceiros", p.partners]] : []),
  ]

  return (
    <article className="gutter mx-auto max-w-6xl pt-10 md:pt-14">
      <Button asChild variant="ghost" size="sm" className="-ml-3 text-muted-foreground">
        <Link to="/projetos">
          <ArrowLeft />
          Voltar aos projetos
        </Link>
      </Button>

      <header className="mt-6 max-w-4xl">
        <p className="text-sm font-medium text-accent">{p.tagline}</p>
        <h1 className="mt-3 text-4xl leading-[1.1] font-semibold md:text-6xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.summary}</p>
      </header>

      <dl className="mt-10 grid gap-x-8 gap-y-5 border-y py-6 sm:grid-cols-2 lg:grid-cols-5">
        {facts.map(([k, v]) => (
          <div key={k} className="min-w-0">
            <dt className="text-sm text-muted-foreground">{k}</dt>
            <dd className="mt-0.5 font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">Contexto</h2>
            <div className="mt-4 max-w-[68ch] space-y-4">
              {p.context.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">Como foi feito</h2>
            <ol className="mt-6 space-y-6">
              {p.steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="grid size-8 place-items-center rounded-full border text-sm font-medium tabular-nums text-accent">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-sans text-base font-semibold tracking-normal">{s.title}</h3>
                    <p className="mt-1 max-w-[64ch] text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="min-w-0 space-y-8 lg:sticky lg:top-24 lg:self-start">
          {p.highlight && <LeadTimeChart {...p.highlight} />}
          <section>
            <h2 className="text-2xl font-semibold">Resultados</h2>
            <ul className="mt-4 space-y-3">
              {p.results.map((r) => (
                <li key={r} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
          <Separator />
          <div className="flex flex-wrap gap-2">
            {p.keywords.map((k) => (
              <Badge key={k} variant="outline">
                {k}
              </Badge>
            ))}
          </div>
          {p.link && (
            <Button asChild variant="outline" className="w-full">
              <a href={p.link.href} target="_blank" rel="noreferrer">
                {p.link.label}
                <ExternalLink />
              </a>
            </Button>
          )}
        </aside>
      </div>

      <Link
        to={`/projetos/${next.slug}`}
        className="group mt-20 flex items-center justify-between gap-6 border-y py-8 hover:text-accent"
      >
        <span className="min-w-0">
          <span className="block text-sm text-muted-foreground">Próximo projeto</span>
          <span className="mt-1 block font-display text-2xl font-semibold md:text-3xl">{next.title}</span>
        </span>
        <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  )
}
