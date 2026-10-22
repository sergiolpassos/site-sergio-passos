import { Globe2 } from "lucide-react"

import photo from "@/assets/sergio-passos.jpg"
import {
  certifications,
  education,
  english,
  experience,
  profile,
  recommendations,
  skills,
  teachingNote,
} from "@/data/profile"
import { Badge } from "@/components/ui/badge"
import { CareerBar } from "@/components/CareerBar"
import { Section } from "@/components/Section"

const peoplePhotos = import.meta.glob("@/assets/people/*", { eager: true, import: "default" }) as Record<string, string>
const personPhoto = (file: string) =>
  Object.entries(peoplePhotos).find(([k]) => k.endsWith("/" + file))?.[1]
const initials = (name: string) => {
  const parts = name.split(" ").filter(Boolean)
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function About() {
  return (
    <>
      <section className="gutter mx-auto grid max-w-6xl gap-10 pt-12 md:grid-cols-[1fr_20rem] md:gap-16 md:pt-20">
        <div className="min-w-0">
          <h1 className="text-5xl font-semibold leading-tight md:text-6xl">Sobre mim</h1>
          <div className="mt-8 max-w-[68ch] space-y-4 text-[1.05rem]">
            {profile.summary.map((p, i) => (
              <p key={i} className={i === 0 ? "text-foreground" : "text-muted-foreground"}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <aside className="min-w-0">
          <div className="overflow-hidden rounded-xl bg-steel">
            <img src={photo} alt="Sérgio Passos Jr." width={860} height={1004} className="aspect-[6/7] w-full object-cover object-top" />
          </div>
          <dl className="mt-6 divide-y border-y">
            {profile.facts.map((f) => (
              <div key={f.label} className="flex items-baseline gap-4 py-3">
                <dt className="w-20 shrink-0 font-display text-2xl font-semibold tabular-nums text-accent">{f.value}</dt>
                <dd className="text-sm text-muted-foreground">{f.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <Section title="Trajetória">
        <CareerBar />
        <ol className="mt-14 border-b">
          {experience.map((e) => (
            <li key={e.role + e.period} className="grid gap-2 border-t py-7 md:grid-cols-[13rem_1fr] md:gap-8">
              <div className="text-sm">
                <p className="font-medium">{e.company}</p>
                <p className="tabular-nums text-muted-foreground">{e.period}</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-sans text-lg font-semibold tracking-normal">{e.role}</h3>
                {e.bullets.length > 0 && (
                  <ul className="mt-2 max-w-[70ch] list-disc space-y-1 pl-5 text-muted-foreground marker:text-border">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm text-muted-foreground">{teachingNote}</p>
      </Section>


      <Section title="Formação e certificações">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-sans text-sm font-semibold tracking-normal text-muted-foreground">Formação acadêmica</h3>
            <ul className="mt-3 divide-y border-y">
              {education.map((e) => (
                <li key={e.title} className="flex gap-4 py-3">
                  <span className="w-12 shrink-0 text-sm tabular-nums text-muted-foreground">{e.year}</span>
                  <span>
                    <span className="font-medium">{e.title}</span>
                    <br />
                    <span className="text-sm text-muted-foreground">{e.school}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold tracking-normal text-muted-foreground">Certificações e cursos</h3>
            <ul className="mt-3 divide-y border-y">
              {certifications.map((c) => (
                <li key={c.title} className="flex gap-4 py-3">
                  <span className="w-12 shrink-0 text-sm tabular-nums text-muted-foreground">{c.year}</span>
                  <span>
                    <span className="font-medium">{c.title}</span>
                    <br />
                    <span className="text-sm text-muted-foreground">{c.school}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Competências">
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-sans text-sm font-semibold tracking-normal text-muted-foreground">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <Badge key={s} variant="outline" className="text-sm text-foreground">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {recommendations.length > 0 && (
        <Section title="Recomendações" intro={<p>Depoimentos de gestores e colegas, publicados no meu LinkedIn.</p>}>
          <div className="grid overflow-hidden rounded-xl border md:grid-cols-2">
            {recommendations.map((r) => (
              <figure key={r.author} className="border-b p-6 md:p-8 md:odd:border-r md:last:odd:col-span-2 md:last:odd:border-r-0">
                <figcaption className="flex items-center gap-3">
                  {r.photo ? (
                    <img src={personPhoto(r.photo)} alt="" className="size-11 shrink-0 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-full bg-steel text-sm font-semibold text-white">
                      {initials(r.author)}
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block font-semibold">{r.author}</span>
                    <span className="block text-sm text-muted-foreground">{r.role}</span>
                  </span>
                </figcaption>
                <blockquote className="mt-4">
                  <span aria-hidden className="mr-1 font-display text-2xl leading-none text-accent">“</span>
                  {r.text}
                  <span aria-hidden className="ml-1 font-display text-2xl leading-none text-accent">”</span>
                </blockquote>
              </figure>
            ))}
          </div>
        </Section>
      )}
      <Section className="pb-4">
        <div className="grid gap-8 rounded-xl bg-accent-soft p-6 md:grid-cols-[auto_1fr] md:p-10">
          <Globe2 className="size-9 text-accent" aria-hidden />
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold">{english.level}, no trabalho desde 2010</h2>
            <p className="mt-4 max-w-[70ch]">{english.text}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {english.points.map((p) => (
                <li key={p}>
                  <Badge variant="secondary" className="bg-background text-sm">{p}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
