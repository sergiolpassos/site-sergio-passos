import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

// PREVIEW=1 gera um único HTML (usado só para a prévia); o build normal é o que vai para a Vercel
export default defineConfig({
  plugins: [react(), tailwindcss(), ...(process.env.PREVIEW ? [viteSingleFile()] : [])],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
})
