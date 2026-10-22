// Matriz impacto x esforço, desenhada em escala.
// É um exemplo ilustrativo do método usado para priorizar as dores do diagnóstico.

const items = [
  { label: "Bloqueios sem registro de motivo", impact: 8.6, effort: 0.6 },
  { label: "Itens pulando etapas no board", impact: 7.2, effort: 1.2 },
  { label: "Papéis pouco claros", impact: 5.9, effort: 2.2 },
  { label: "Sem métrica de lead time", impact: 8.8, effort: 5.6 },
  { label: "Dependências entre squads invisíveis", impact: 6.8, effort: 6.1 },
  { label: "Ritos sem pauta definida", impact: 3.4, effort: 1.2 },
  { label: "Padronizar todos os boards de uma vez", impact: 2.6, effort: 5.8 },
]

const quadrants = [
  { x: 0, y: 0, label: "Fazer agora" },
  { x: 1, y: 0, label: "Frentes estruturantes" },
  { x: 0, y: 1, label: "Ajustes rápidos" },
  { x: 1, y: 1, label: "Reavaliar depois" },
]

export function PriorityMatrix() {
  const W = 560
  const H = 380
  const pad = { l: 44, r: 16, t: 16, b: 40 }
  const iw = W - pad.l - pad.r
  const ih = H - pad.t - pad.b
  const sx = (v: number) => pad.l + (v / 10) * iw
  const sy = (v: number) => pad.t + ih - (v / 10) * ih

  return (
    <figure className="rounded-xl border bg-card p-4 md:p-6">
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[480px]" role="img" aria-label="Matriz de impacto por esforço com as dores priorizadas">
          {quadrants.map((q) => (
            <g key={q.label}>
              <rect
                x={pad.l + q.x * (iw / 2)}
                y={pad.t + q.y * (ih / 2)}
                width={iw / 2}
                height={ih / 2}
                fill={q.x === 0 && q.y === 0 ? "var(--accent-soft)" : "var(--muted)"}
                stroke="var(--background)"
                strokeWidth={3}
              />
              <text
                x={pad.l + q.x * (iw / 2) + 10}
                y={pad.t + q.y * (ih / 2) + ih / 2 - 12}
                fontSize={12}
                fontWeight={600}
                fill={q.x === 0 && q.y === 0 ? "var(--accent)" : "var(--muted-foreground)"}
              >
                {q.label}
              </text>
            </g>
          ))}
          {items.map((it) => (
            <g key={it.label}>
              <circle cx={sx(it.effort)} cy={sy(it.impact)} r={6} fill="var(--foreground)" />
              <text
                x={sx(it.effort) + 10}
                y={sy(it.impact) + 4}
                fontSize={11}
                textAnchor="start"
                fill="var(--foreground)"
              >
                {it.label}
              </text>
            </g>
          ))}
          <text x={pad.l + iw / 2} y={H - 8} fontSize={12} textAnchor="middle" fill="var(--muted-foreground)">
            Esforço para resolver →
          </text>
          <text
            x={14}
            y={pad.t + ih / 2}
            fontSize={12}
            textAnchor="middle"
            fill="var(--muted-foreground)"
            transform={`rotate(-90 14 ${pad.t + ih / 2})`}
          >
            Impacto no fluxo →
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        Exemplo ilustrativo do método: cada dor do diagnóstico é posicionada por impacto no fluxo de entrega e esforço para
        resolver.
      </figcaption>
    </figure>
  )
}
