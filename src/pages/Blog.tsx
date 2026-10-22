import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

import { formatDate, sortedPosts } from "@/data/blog"

export default function Blog() {
  const posts = sortedPosts()
  const byYear = posts.reduce<Record<string, typeof posts>>((acc, p) => {
    const y = p.date.slice(0, 4)
    ;(acc[y] ||= []).push(p)
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a))

  return (
    <section className="gutter mx-auto max-w-3xl pt-12 md:pt-20">
      <nav aria-label="Trilha" className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Início</Link>
      </nav>
      <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-6xl">Blog</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Textos sobre agilidade, fluxo, produto e gestão, muitos deles publicados primeiro no LinkedIn.
      </p>
      <Button asChild variant="outline" className="mt-6">
        <a href="https://www.linkedin.com/in/sergiopassosjr/recent-activity/all/" target="_blank" rel="noreferrer">
          Ver todas as publicações no LinkedIn
          <ArrowUpRight />
        </a>
      </Button>

      {posts.length === 0 && (
        <p className="mt-12 rounded-xl border bg-card p-6 text-muted-foreground">
          Os primeiros textos estão a caminho. Enquanto isso, acompanhe as publicações no LinkedIn.
        </p>
      )}

      {years.map((y) => (
        <div key={y} className="mt-12">
          <h2 className="font-sans text-sm font-semibold tracking-normal text-muted-foreground tabular-nums">{y}</h2>
          <ul className="mt-3 divide-y border-y">
            {byYear[y].map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="group grid gap-1 py-5 sm:grid-cols-[1fr_5rem] sm:gap-6">
                  <span className="min-w-0">
                    <span className="block font-semibold group-hover:text-accent">{p.title}</span>
                    <span className="mt-1 block text-muted-foreground">{p.summary}</span>
                  </span>
                  <span className="text-sm text-muted-foreground tabular-nums sm:text-right">{formatDate(p.date)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
