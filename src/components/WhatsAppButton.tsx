import { MessageCircle } from "lucide-react"
import { profile } from "@/data/profile"

export function WhatsAppButton() {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed z-30 grid size-13 place-items-center rounded-full bg-accent text-background shadow-lg transition-transform hover:scale-105"
      style={{
        right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <MessageCircle className="size-6" />
    </a>
  )
}
