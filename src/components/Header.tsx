import { Link, NavLink } from "react-router-dom"
import { Menu } from "lucide-react"

import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
]

export function Header() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="gutter mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                  isActive
                    ? "font-medium text-foreground after:absolute after:inset-x-3 after:-bottom-[13px] after:h-0.5 after:bg-accent"
                    : "text-muted-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="font-display text-lg">{profile.name}</SheetTitle>
            <SheetDescription>{profile.role}</SheetDescription>
            <nav aria-label="Principal" className="mt-4 flex flex-col">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "border-b py-3 text-base",
                        isActive ? "font-medium text-accent" : "text-foreground"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
