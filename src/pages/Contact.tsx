import { useState } from "react"
import { Copy, Check, Download, BriefcaseBusiness, Mail, MessageCircle } from "lucide-react"

import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        navigator.clipboard
          ?.writeText(value)
          .then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          })
          .catch(() => {})
      }}
      aria-label={`Copiar ${label}`}
    >
      {copied ? <Check /> : <Copy />}
      {copied ? "Copiado" : "Copiar"}
    </Button>
  )
}

export default function Contact() {
  const rows = [
    {
      icon: Mail,
      title: "E-mail",
      value: profile.email,
      note: "Melhor canal para propostas e contatos profissionais.",
      action: (
        <>
          <CopyButton value={profile.email} label="e-mail" />
          <Button asChild size="sm">
            <a href={`mailto:${profile.email}`}>Enviar e-mail</a>
          </Button>
        </>
      ),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp e telefone",
      value: profile.phoneDisplay,
      note: "Mensagens pelo WhatsApp ou ligação.",
      action: (
        <>
          <CopyButton value={profile.phoneDisplay} label="telefone" />
          <Button asChild size="sm">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">Abrir WhatsApp</a>
          </Button>
        </>
      ),
    },
    {
      icon: BriefcaseBusiness,
      title: "LinkedIn",
      value: profile.linkedinDisplay,
      note: "Conteúdo sobre agilidade e produto, e histórico completo.",
      action: (
        <Button asChild size="sm" variant="outline">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">Ver perfil</a>
        </Button>
      ),
    },
    {
      icon: Download,
      title: "Currículo",
      value: "Arquivo PDF",
      note: "Versão completa com experiências, formação e certificações.",
      action: (
        <Button asChild size="sm" variant="outline">
          <a href={profile.cv} download>Baixar currículo</a>
        </Button>
      ),
    },
  ]

  return (
    <section className="gutter mx-auto max-w-6xl pt-12 md:pt-20">
      <h1 className="text-5xl font-semibold leading-tight md:text-6xl">Vamos conversar</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Tem uma posição em aberto ou um desafio de transformação na sua área de tecnologia? Fale comigo pelo canal que preferir.
      </p>

      <ul className="mt-12 border-b">
        {rows.map((r) => (
          <li key={r.title} className="grid gap-4 border-t py-6 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center">
            <r.icon className="size-6 text-accent" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">{r.title}</p>
              <p className="mt-0.5 select-all break-words font-display text-xl font-semibold md:text-2xl">{r.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>
            </div>
            <div className="flex flex-wrap gap-2">{r.action}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
