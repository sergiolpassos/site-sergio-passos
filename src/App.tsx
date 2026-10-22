import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Projects from "@/pages/Projects"
import ProjectCase from "@/pages/ProjectCase"
import Contact from "@/pages/Contact"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"
import NotFound from "@/pages/NotFound"

const titles: Record<string, string> = {
  "/": "Sérgio Passos | Agile Coach",
  "/sobre": "Sobre | Sérgio Passos",
  "/projetos": "Projetos | Sérgio Passos",
  "/blog": "Blog | Sérgio Passos",
  "/contato": "Contato | Sérgio Passos",
}

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? "Sérgio Passos | Agile Coach"
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <RouteEffects />
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:slug" element={<ProjectCase />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
