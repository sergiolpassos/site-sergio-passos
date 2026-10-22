import { Fragment } from "react"
import { blogImages } from "@/data/blog"

// Converte o texto simples dos posts em parágrafos, subtítulos, listas e imagens.
export function PostBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/)
  return (
    <div className="space-y-5 text-[1.075rem] leading-[1.75]">
      {blocks.map((block, i) => {
        const b = block.trim()
        if (b.startsWith("## ")) {
          return (
            <h2 key={i} className="pt-4 text-2xl font-semibold">
              {b.slice(3)}
            </h2>
          )
        }
        const img = b.match(/^!\[(.*?)\]\((.*?)\)$/)
        if (img) {
          const src = blogImages[img[2]] ?? img[2]
          return (
            <figure key={i} className="py-2">
              <img src={src} alt={img[1]} className="w-full rounded-xl border bg-white" loading="lazy" />
              <figcaption className="mt-2 text-sm text-muted-foreground">{img[1]}</figcaption>
            </figure>
          )
        }
        const lines = b.split("\n")
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5 marker:text-accent">
              {lines.map((l, j) => (
                <li key={j}>{l.trim().slice(2)}</li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {l}
              </Fragment>
            ))}
          </p>
        )
      })}
    </div>
  )
}
