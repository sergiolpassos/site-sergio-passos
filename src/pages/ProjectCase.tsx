import type { ReactNode } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Check, ExternalLink, Users } from "lucide-react"

import { projects, type Metric, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PriorityMatrix } from "@/components/PriorityMatrix"
import NotFound from "./NotFound"

function CaseSection({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t pt-10 md:pt-14">
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function MetricCards({ metrics, tone = "light" }: { metrics: Metric[]; tone?: "light" | "dark" }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className={
            tone === "dark"
              ? "rounded-xl bg-primary p-5 text-primary-foreground"
              : "rounded-xl border bg-card p-5"
          }
        >
          <p className={`font-display text-4xl leading-none font-semibold tabular-nums ${tone === "dark" ? "" : "text-accent"}`}>
            {m.value}
          </p>
          <p className="mt-3 font-medium">{m.label}</p>
          {m.detail && <p className={`mt-1 text-sm ${tone === "dark" ? "opacity-75" : "text-muted-foreground"}`}>{m.detail}</p>}
        </div>
      ))}
    </div>
  )
}

function BeforeAfter({ before, after, unit, label }: NonNullable<Project["beforeAfter"]>) {
  return (
    <figure className="self-start rounded-xl border bg-card p-6">
      <figcaption className="text-sm text-muted-foreground">Antes e depois: {label}</figcaption>
      <div className="mt-5 space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span>Antes</span>
            <span className="font-medium tabular-nums">{before} {unit}</span>
          </div>
          <div className="mt-1.5 h-4 w-full rounded-sm bg-phase-1" />
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <span>Depois</span>
            <span className="font-medium tabular-nums text-accent">{after} {unit}</span>
          </div>
          <div className="mt-1.5 h-4 rounded-sm bg-accent" style={{ width: `${(after / before) * 100}%` }} />
        </div>
      </div>
    </figure>
  )
}

function Bars({ items, tone }: { items: { pct: number; label: string }[]; tone: "good" | "gap" }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i.label}>
          <div className="flex items-baseline gap-3">
            <span className={`w-11 shrink-0 text-right font-display text-xl font-semibold tabular-nums ${tone === "good" ? "text-accent" : "text-foreground"}`}>
              {i.pct}%
            </span>
            <span className="text-sm">{i.label}</span>
          </div>
          <div className="mt-1 ml-14 h-1.5 rounded-full bg-muted">
            <div className={`h-full rounded-full ${tone === "good" ? "bg-accent" : "bg-steel"}`} style={{ width: `${i.pct}%` }} />
          </div>
        </li>
      ))}
    </ul>
  )
}

function MaturityShift({ data }: { data: NonNullable<Project["maturityShift"]> }) {
  const colors = ["bg-phase-1", "bg-steel", "bg-accent/70", "bg-accent"]
  const rows = [data.before, data.after]
  const total = data.before.counts.reduce((a, b) => a + b, 0)
  return (
    <div>
      <p className="text-sm text-muted-foreground">{data.note}</p>
      <div className="mt-6 space-y-6">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium">{r.label}</span>
              <span className="text-sm text-muted-foreground">
                média <span className="font-display text-xl font-semibold tabular-nums text-foreground">{r.avg.toFixed(2).replace(".", ",")}</span>
              </span>
            </div>
            <div className="mt-2 flex h-10 overflow-hidden rounded-md bg-muted">
              {r.counts.map((c, i) =>
                c > 0 ? (
                  <div
                    key={i}
                    className={`${colors[i]} flex items-center justify-center border-r-2 border-background text-sm font-semibold ${i >= 2 ? "text-white" : "text-foreground"}`}
                    style={{ width: `${(c / total) * 100}%` }}
                    title={`${data.levels[i]}: ${c} squads`}
                  >
                    {c}
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {data.levels.map((l, i) => (
          <li key={l} className="flex items-center gap-2">
            <span className={`size-2.5 rounded-sm ${colors[i]}`} />
            {l}
          </li>
        ))}
      </ul>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {data.highlights.map((h) => (
          <li key={h} className="flex gap-3 rounded-xl border bg-card p-4">
            <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Survey({ data }: { data: NonNullable<Project["survey"]> }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{data.note}</p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[18rem_1fr]">
        <div className="rounded-xl bg-primary p-6 text-primary-foreground">
          <p className="font-display text-6xl leading-none font-semibold tabular-nums">{data.score}</p>
          <p className="mt-2 opacity-80">{data.scale}</p>
          <div className="mt-6 space-y-3">
            {data.breakdown.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-sm">
                  <span>{b.label}</span>
                  <span className="tabular-nums">{b.pct.toFixed(1).replace(".", ",")}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-primary-foreground/20">
                  <div className="h-full rounded-full bg-primary-foreground" style={{ width: `${b.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="font-sans text-base font-semibold tracking-normal">O que os times disseram sobre a minha atuação</h3>
          <ul className="mt-4 space-y-4">
            {data.quotes.map((q) => (
              <li key={q} className="border-l-2 border-accent pl-4">
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Dashboards({ items }: { items: NonNullable<Project["dashboards"]> }) {
  return (
    <div className="space-y-12">
      {items.map((d) => (
        <figure key={d.figure.caption} className="grid gap-5 lg:grid-cols-[1fr_20rem] lg:items-start">
          <a href={d.figure.src} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border bg-white">
            <img src={d.figure.src} alt={d.figure.alt} loading="lazy" className="w-full" />
          </a>
          <figcaption className="min-w-0">
            <p className="font-semibold">{d.figure.caption}</p>
            <p className="mt-2 text-muted-foreground">{d.reading}</p>
          </figcaption>
        </figure>
      ))}
      <p className="text-sm text-muted-foreground">Dados internos, nomes e marcas foram ocultados.</p>
    </div>
  )
}

export default function ProjectCase() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />
  const p = projects[index]
  const next = projects[(index + 1) % projects.length]

  const facts = [
    ["Empresa", p.company],
    ["Setor", p.sector],
    ["Meu papel", p.role],
    ...(p.scope ? [["Escopo", p.scope]] : []),
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

      <dl className="mt-10 grid gap-x-8 gap-y-5 border-y py-6 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map(([k, v]) => (
          <div key={k} className="min-w-0">
            <dt className="text-sm text-muted-foreground">{k}</dt>
            <dd className="mt-0.5 font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <MetricCards metrics={p.metrics} />
      </div>

      <div className="mt-16 space-y-16">
        <CaseSection title="O desafio">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Qual era o problema", p.challenge.problem],
              ["Por que era necessário", p.challenge.why],
              ["Como abordei", p.challenge.approach],
            ].map(([t, txt]) => (
              <div key={t} className="min-w-0">
                <h3 className="font-sans text-base font-semibold tracking-normal">{t}</h3>
                <p className="mt-2 text-muted-foreground">{txt}</p>
              </div>
            ))}
          </div>
          {p.objective && (
            <blockquote className="mt-10 rounded-xl bg-accent-soft p-6 md:p-8">
              <p className="text-sm font-medium text-accent">Objetivo estratégico</p>
              <p className="mt-2 font-display text-xl leading-snug md:text-2xl">{p.objective}</p>
            </blockquote>
          )}
        </CaseSection>

        <CaseSection title="Papel e responsabilidades">
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
            <p className="max-w-[68ch]">{p.roleText}</p>
            <div>
              <h3 className="flex items-center gap-2 font-sans text-sm font-semibold tracking-normal text-muted-foreground">
                <Users className="size-4" aria-hidden />
                Com quem trabalhei
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.collaborators.map((c) => (
                  <li key={c}>
                    <Badge variant="secondary" className="text-sm">{c}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CaseSection>

        {p.diagnostic && (
          <CaseSection title={p.diagnostic.title}>
            <p className="text-sm text-muted-foreground">{p.diagnostic.note}</p>
            <div className="mt-6 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-sans text-base font-semibold tracking-normal">Forças</h3>
                <div className="mt-4">
                  <Bars items={p.diagnostic.strengths} tone="good" />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-base font-semibold tracking-normal">Oportunidades</h3>
                <div className="mt-4">
                  <Bars items={p.diagnostic.gaps} tone="gap" />
                </div>
              </div>
            </div>
          </CaseSection>
        )}

        <CaseSection title="Como foi feito">
          <ol className="space-y-12">
            {p.steps.map((s, i) => (
              <li key={s.title} className="grid gap-4 md:grid-cols-[3rem_1fr]">
                <span className="grid size-10 place-items-center rounded-full border text-sm font-medium tabular-nums text-accent">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-sans text-lg font-semibold tracking-normal">{s.title}</h3>
                  <p className="mt-2 max-w-[70ch] text-muted-foreground">{s.text}</p>
                  {s.matrix && (
                    <div className="mt-6 max-w-3xl">
                      <PriorityMatrix />
                    </div>
                  )}
                  {s.figure && (
                    <figure className="mt-6">
                      <a href={s.figure.src} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border bg-white">
                        <img src={s.figure.src} alt={s.figure.alt} loading="lazy" className="w-full" />
                      </a>
                      <figcaption className="mt-2 text-sm text-muted-foreground">{s.figure.caption}</figcaption>
                    </figure>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </CaseSection>

        {p.dashboards && (
          <CaseSection title="Os dashboards na prática">
            <Dashboards items={p.dashboards} />
          </CaseSection>
        )}

        <CaseSection title="Decisões e estratégia">
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {p.decisions.map((d) => (
              <div key={d.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-sans text-base font-semibold tracking-normal">{d.title}</h3>
                <p className="mt-1.5 text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        {p.maturityShift && (
          <CaseSection title={p.maturityShift.title}>
            <MaturityShift data={p.maturityShift} />
          </CaseSection>
        )}

        {p.survey && (
          <CaseSection title={p.survey.title}>
            <Survey data={p.survey} />
          </CaseSection>
        )}

        <CaseSection title="Resultados">
          <MetricCards metrics={p.metrics} tone="dark" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
            <ul className="space-y-4">
              {p.results.map((r) => (
                <li key={r.text} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                  <span>
                    <span className="font-semibold">{r.area}: </span>
                    {r.text}
                  </span>
                </li>
              ))}
            </ul>
            {p.beforeAfter && <BeforeAfter {...p.beforeAfter} />}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {p.keywords.map((k) => (
              <Badge key={k} variant="outline" className="text-foreground">
                {k}
              </Badge>
            ))}
          </div>
          {p.link && (
            <Button asChild variant="outline" className="mt-6">
              <a href={p.link.href} target="_blank" rel="noreferrer">
                {p.link.label}
                <ExternalLink />
              </a>
            </Button>
          )}
        </CaseSection>
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
