import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, MemoryRouter } from "react-router-dom"

import "./index.css"
import App from "./App"

// No site publicado usa BrowserRouter (endereços limpos como /sobre).
// A prévia usa MemoryRouter porque roda dentro de uma página única.
const Router = import.meta.env.VITE_PREVIEW ? MemoryRouter : BrowserRouter

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
