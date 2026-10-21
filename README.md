# Site profissional | Sérgio Passos

Site em React + Vite + Tailwind CSS + componentes shadcn/ui.

## Onde editar o conteúdo

Todo o texto está em `src/data/profile.ts`: resumo, experiência, formação, certificações, projetos (cases) e recomendações.
A foto está em `src/assets/sergio-passos.jpg` e o currículo em `public/curriculo-sergio-passos.pdf`.

Para incluir as recomendações do LinkedIn, preencha a lista `recommendations` no mesmo arquivo. Enquanto ela estiver vazia, a seção não aparece.

## Rodar no computador (opcional)

Precisa do Node.js 20 ou superior.

```bash
npm install
npm run dev
```

## Publicar (GitHub + Vercel + domínio do registro.br)

1. Crie uma conta no GitHub e um repositório novo (ex.: `site-sergio-passos`). Envie esta pasta para ele.
2. Crie uma conta na Vercel entrando com o GitHub. Clique em **Add New > Project**, escolha o repositório e clique em **Deploy**. A Vercel detecta o Vite sozinha.
3. Na Vercel, abra o projeto > **Settings > Domains** e adicione seu domínio (ex.: `sergiopassos.com.br`). A Vercel mostra os registros DNS necessários.
4. No registro.br, abra o domínio > **DNS > Editar zona** e crie os registros indicados pela Vercel (normalmente um registro A para o domínio raiz e um CNAME para o `www`).
5. Aguarde a propagação (de minutos a algumas horas). O HTTPS é ativado automaticamente.

O arquivo `vercel.json` já faz com que links diretos (ex.: `/sobre` ou `/projetos/...`) funcionem quando compartilhados.

## Adicionar mais componentes shadcn/ui

```bash
npx shadcn@latest add accordion
```
