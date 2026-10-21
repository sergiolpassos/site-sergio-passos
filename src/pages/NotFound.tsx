import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="gutter mx-auto max-w-6xl pt-20">
      <h1 className="text-5xl font-semibold">Página não encontrada</h1>
      <p className="mt-4 text-muted-foreground">O endereço pode ter mudado. Volte para o início para continuar navegando.</p>
      <Button asChild className="mt-8">
        <Link to="/">Ir para o início</Link>
      </Button>
    </section>
  )
}
