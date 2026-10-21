import { phases, teaching, timeline } from "@/data/profile"
import { cn } from "@/lib/utils"

const START = 1994.6
const END = 2026.9
const pct = (y: number) => ((y - START) / (END - START)) * 100
const ticks = [1995, 2000, 2005, 2010, 2015, 2020, 2025]
const phaseBg = { 1: "bg-phase-1", 2: "bg-phase-2", 3: "bg-phase-3" } as const
const fmt = (y: number) => Math.floor(y)

// Trajetória de 1994 a 2026 desenhada em escala: cada bloco ocupa a largura proporcional ao tempo na empresa.
export function CareerBar({ showLegend = true }: { showLegend?: boolean }) {
  return (
    <figure className="w-full">
      <div className="relative">
        {/* Rótulos acima da faixa para empresas com bloco estreito demais */}
        <div className="relative mb-1.5 hidden h-6 sm:block">
          {timeline
            .filter((t) => t.labelAbove)
            .map((t) => (
              <span
                key={t.company}
                className="absolute bottom-0 flex items-end gap-1 text-xs font-medium whitespace-nowrap"
                style={{ right: `${100 - pct(t.end)}%` }}
              >
                {t.company}
                <span className="mb-[-6px] h-4 w-px bg-foreground/50" aria-hidden />
              </span>
            ))}
        </div>
        {/* Faixa principal */}
        <div className="relative h-14 overflow-hidden rounded-md bg-muted" role="img" aria-label="Linha do tempo da carreira de 1994 a 2026">
          {timeline.map((t) => {
            const w = pct(t.end) - pct(t.start)
            return (
              <div
                key={t.company}
                title={`${t.company}: ${fmt(t.start)} a ${fmt(t.end)}`}
                className={cn("absolute inset-y-0 flex items-center overflow-hidden border-r-2 border-background", phaseBg[t.phase])}
                style={{ left: `${pct(t.start)}%`, width: `${w}%` }}
              >
                {w > 7 && (
                  <span
                    className={cn(
                      "hidden truncate px-2 text-xs font-medium sm:block",
                      t.phase === 1 ? "text-foreground" : t.phase === 3 ? "text-background" : "text-white"
                    )}
                  >
                    {t.company.replace(" (hoje WEG)", "").replace(" Tecnologia", "")}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Docência em paralelo */}
        <div className="relative mt-1.5 h-2">
          {teaching.map((t) => (
            <div
              key={t.company}
              title={`Professor no ${t.company}`}
              className="absolute inset-y-0 rounded-full bg-steel/60"
              style={{ left: `${pct(t.start)}%`, width: `${pct(t.end) - pct(t.start)}%` }}
            />
          ))}
        </div>

        {/* Anos */}
        <div className="relative mt-2 h-5 text-[0.7rem] tabular-nums text-muted-foreground">
          {ticks.map((y) => (
            <span key={y} className="absolute -translate-x-1/2" style={{ left: `${pct(y)}%` }}>
              {y}
            </span>
          ))}
        </div>
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
