# Site profissional | Sérgio Passos

Site em React + Vite + Tailwind CSS + componentes shadcn/ui.

## Onde editar o conteúdo

- `src/data/profile.ts`: resumo, pilares, trajetória, formação, certificações, competências e recomendações.
- `src/data/projects.ts`: os cases (desafio, papel, como foi feito, decisões e resultados).
- `src/data/blog.ts`: os textos do blog. As instruções de formato estão no topo do arquivo.
- Imagens dos cases: `src/assets/cases/`. Fotos de quem recomendou: `src/assets/people/` (preencha o campo `photo`).
- Foto: `src/assets/sergio-passos.jpg`. Currículo: `public/curriculo-sergio-passos.pdf`.

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

## Atualizar o site depois de uma nova versão

1. Descompacte o novo arquivo .zip.
2. No GitHub, abra o repositório e clique em **Add file > Upload files**.
3. Abra a pasta `sergio-site`, selecione tudo o que está dentro dela e arraste para a página. Arquivos com o mesmo nome são substituídos.
4. Escreva uma descrição (ex.: "Nova versão dos cases e blog") e clique em **Commit changes**.
5. A Vercel publica sozinha em cerca de 1 minuto. Acompanhe em **Deployments** no painel da Vercel.

Para mudar só um texto, abra o arquivo no GitHub, clique no lápis, edite e clique em **Commit changes**.

## Adicionar mais componentes shadcn/ui

```bash
npx shadcn@latest add accordion
```
