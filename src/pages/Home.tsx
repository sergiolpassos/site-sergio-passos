import { Link } from "react-router-dom"
import { ArrowRight, Boxes, Cpu, Download, Gauge, Globe2, Mail, MessageCircle, Target, Workflow } from "lucide-react"

import photo from "@/assets/sergio-passos.jpg"
import { pillars, profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { formatDate, sortedPosts } from "@/data/blog"
import { Button } from "@/components/ui/button"
import { ProjectRow } from "@/components/ProjectRow"
import { Section } from "@/components/Section"

const pillarIcons = { workflow: Workflow, gauge: Gauge, target: Target, boxes: Boxes, cpu: Cpu, globe: Globe2 }

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const latestPosts = sortedPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="gutter mx-auto grid max-w-6xl items-end gap-10 pt-12 md:grid-cols-[1.35fr_1fr] md:gap-14 md:pt-20">
        <div className="min-w-0 pb-2">
          <p className="text-sm font-medium text-accent">{profile.role}</p>
          <h1 className="mt-4 text-[2.6rem] leading-[1.05] font-semibold sm:text-6xl md:text-[4.25rem]">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/projetos">Ver projetos</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.cv} download>
                <Download />
                Baixar currículo
              </a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="overflow-hidden rounded-xl bg-steel">
            <img
              src={photo}
              alt="Sérgio Passos, de camisa azul e braços cruzados"
              width={860}
              height={1004}
              className="aspect-[6/7] w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Como atuo */}
      <Section title="Como eu atuo" intro={<p>{profile.intro}</p>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = pillarIcons[p.icon]
            return (
              <div key={p.title} className="rounded-xl border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-sans text-base font-semibold tracking-normal">{p.title}</h3>
                <p className="mt-1 text-muted-foreground">{p.text}</p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Projetos */}
      <Section title="Projetos em destaque">
        <div className="border-b">
          {featured.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/projetos">Ver todos os projetos</Link>
        </Button>
      </Section>

      {/* Blog */}
      {latestPosts.length > 0 && (
        <Section title="Do blog">
          <ul className="divide-y border-y">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="group grid gap-1 py-5 sm:grid-cols-[1fr_6rem] sm:gap-6">
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold group-hover:text-accent">{p.title}</span>
                    <span className="mt-1 block text-muted-foreground">{p.summary}</span>
                  </span>
                  <span className="text-sm text-muted-foreground tabular-nums sm:text-right">{formatDate(p.date)}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/blog">
              Ver todos os textos
              <ArrowRight />
            </Link>
          </Button>
        </Section>
      )}

      {/* Contato */}
      <Section>
        <div className="rounded-xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold md:text-4xl">
            Precisa estruturar o fluxo de entrega da sua área de tecnologia?
          </h2>
          <p className="mt-3 max-w-xl opacity-80">
            Estou disponível para posições de Agile Coach, Especialista em Agilidade e Squad Lead, além de Gestão de Produtos e
            Gestão de Projetos.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm">
            <li className="rounded-full border border-primary-foreground/30 px-3 py-1">Presencial na Grande Florianópolis</li>
            <li className="rounded-full border border-primary-foreground/30 px-3 py-1">Remoto ou teletrabalho em todo o Brasil e no exterior</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href={`mailto:${profile.email}`}>
                <Mail />
                Enviar e-mail
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10">
              <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
