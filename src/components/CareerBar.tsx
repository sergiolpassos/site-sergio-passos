import { phases, teaching, timeline } from "@/data/profile"
import { cn } from "@/lib/utils"

const phaseBg = { 1: "bg-phase-1", 2: "bg-phase-2", 3: "bg-phase-3" } as const
const fmt = (y: number) => Math.floor(y)

// Escala ajustada: cada empresa recebe uma largura mínima (BASE) e o restante
// da faixa é dividido em proporção ao tempo. Assim passagens curtas continuam
// visíveis e as longas seguem visivelmente maiores.
const BASE = 9.5 // % mínimo por empresa
const durations = timeline.map((t) => t.end - t.start)
const totalYears = durations.reduce((a, b) => a + b, 0)
const free = 100 - BASE * timeline.length
const widths = durations.map((d) => BASE + (d / totalYears) * free)
const lefts = widths.map((_, i) => widths.slice(0, i).reduce((a, b) => a + b, 0))

// Converte um ano para a posição na faixa ajustada (usado na linha de docência)
function posOf(year: number) {
  const i = timeline.findIndex((t) => year >= t.start && year <= t.end)
  if (i === -1) return year < timeline[0].start ? 0 : 100
  const t = timeline[i]
  return lefts[i] + ((year - t.start) / (t.end - t.start)) * widths[i]
}

const shortName = (name: string) => name.replace(" (hoje WEG)", "").replace(" Tecnologia", "")
const yearsLabel = (start: number, end: number) =>
  fmt(start) === fmt(end) ? `${fmt(start)}` : `${fmt(start)} a ${String(fmt(end)).slice(2)}`

export function CareerBar({ showLegend = true }: { showLegend?: boolean }) {
  return (
    <figure className="w-full">
      <div className="relative">
        {/* Faixa principal */}
        <div className="relative flex h-16 overflow-hidden rounded-md" role="img" aria-label="Linha do tempo da carreira de 1994 a 2026">
          {timeline.map((t, i) => (
            <div
              key={t.company}
              title={`${t.company}: ${fmt(t.start)} a ${fmt(t.end)}`}
              className={cn(
                "flex min-w-0 flex-col justify-center border-r-2 border-background px-1.5 last:border-r-0 md:px-2",
                phaseBg[t.phase],
                t.phase === 1 ? "text-foreground" : t.phase === 3 ? "text-background" : "text-white"
              )}
              style={{ width: `${widths[i]}%` }}
            >
              <span className="hidden truncate text-xs font-semibold sm:block">{shortName(t.company)}</span>
              <span className="hidden truncate text-[0.7rem] tabular-nums opacity-85 sm:block">{yearsLabel(t.start, t.end)}</span>
            </div>
          ))}
        </div>

        {/* Docência em paralelo */}
        <div className="relative mt-1.5 h-2">
          {teaching.map((t) => (
            <div
              key={t.company}
              title={`Professor no ${t.company}`}
              className="absolute inset-y-0 rounded-full bg-steel/60"
              style={{ left: `${posOf(t.start)}%`, width: `${posOf(t.end) - posOf(t.start)}%` }}
            />
          ))}
        </div>

        <p className="mt-2 text-[0.75rem] text-muted-foreground">
          Escala ajustada: toda passagem tem um tamanho mínimo para ficar legível, e as mais longas ocupam mais espaço.
        </p>
      </div>

      {showLegend && (
        <figcaption className="mt-6 grid gap-x-8 gap-y-5 text-sm sm:grid-cols-3">
          {([1, 2, 3] as const).map((p) => (
            <div key={p} className="min-w-0">
              <p className="flex items-center gap-2 font-medium">
                <span className={cn("size-2.5 shrink-0 rounded-sm", phaseBg[p])} />
                {phases[p]}
              </p>
              <ul className="mt-1.5 space-y-0.5 pl-[18px] text-muted-foreground">
                {timeline
                  .filter((t) => t.phase === p)
                  .map((t) => (
                    <li key={t.company} className="tabular-nums">
                      {t.company}, {fmt(t.start)}{fmt(t.end) !== fmt(t.start) ? ` a ${fmt(t.end)}` : ""}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <p className="flex items-center gap-2 text-muted-foreground sm:col-span-3">
            <span className="h-1.5 w-5 shrink-0 rounded-full bg-steel/60" />
            Docência em paralelo: IFSC (2011 a 2013) e Senai (2013 a 2017)
          </p>
        </figcaption>
      )}
    </figure>
  )
}
