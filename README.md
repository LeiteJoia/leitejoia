
# Site Leite Jóia

Site estático moderno e responsivo para divulgação dos produtos e valores da marca.

## Estrutura
- `index.html`, `sobre.html`, `produtos.html`, `receitas.html`, `contato.html`
- `assets/images/` (logo e catálogo)
- `assets/css/styles.css`
- `assets/js/main.js`

## Como publicar no GitHub Pages
1. Crie um repositório chamado `leitejoia`.
2. Envie todos os arquivos da pasta deste projeto (mantenha a estrutura de pastas).
3. Em **Settings › Pages**, selecione a branch `main` e a pasta `/ (root)`.
4. Se preferir usar domínio próprio (ex: `leitejoia.com.br`), crie os registros DNS no Registro.br:
   - `A` para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` para `www` apontando para `<seu-usuario>.github.io` (substitua pelo seu usuário).
5. Na raiz do repositório, opcionalmente crie um arquivo `CNAME` contendo apenas `leitejoia.com.br` (ou `www.leitejoia.com.br`, conforme sua escolha) para fixar o domínio.

> Dica: garanta que as imagens estejam dentro da pasta `assets/images` e que o caminho no HTML seja relativo, como `assets/images/logo.png`.
