import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Check, Link2 } from "lucide-react"

import { formatDate, posts, readingMinutes } from "@/data/blog"
import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"
import { PostBody } from "@/components/PostBody"
import NotFound from "./NotFound"

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  const [copied, setCopied] = useState(false)
  if (!post) return <NotFound />

  const copyLink = () => {
    navigator.clipboard
      ?.writeText(window.location.href)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  return (
    <article className="gutter mx-auto max-w-3xl pt-12 md:pt-20">
      <nav aria-label="Trilha" className="flex gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Início</Link>
        <span aria-hidden>/</span>
        <Link to="/blog" className="hover:text-foreground">Blog</Link>
      </nav>
      <h1 className="mt-4 text-4xl leading-[1.1] font-semibold md:text-5xl">{post.title}</h1>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b pb-5 text-sm text-muted-foreground">
        <p className="tabular-nums">
          {formatDate(post.date, { day: "2-digit", month: "short", year: "numeric" })}, {readingMinutes(post.body)} min de leitura
        </p>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" onClick={copyLink} aria-label="Copiar link do texto">
            {copied ? <Check /> : <Link2 />}
            {copied ? "Copiado" : "Copiar link"}
          </Button>
          {post.linkedin && (
            <Button asChild variant="ghost" size="sm">
              <a href={post.linkedin} target="_blank" rel="noreferrer">Ver no LinkedIn</a>
            </Button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <PostBody body={post.body} />
      </div>

      <div className="mt-14 rounded-xl bg-accent-soft p-6">
        <p className="font-medium">Gostou do texto?</p>
        <p className="mt-1 text-muted-foreground">Vamos continuar a conversa no LinkedIn.</p>
        <Button asChild className="mt-4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">Seguir no LinkedIn</a>
        </Button>
      </div>
    </article>
  )
}
