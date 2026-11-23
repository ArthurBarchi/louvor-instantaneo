# Pistas Cristianas · Latam (Estudio Alabanza)

Página de vendas em espanhol (América Latina) + páginas do funil da Hotmart. Site estático: HTML, CSS e JS puros, sem build.

## Páginas

| Endereço | Arquivo | O que é |
|---|---|---|
| `/` | `index.html` | Página de vendas (Básico US$ 9.90 · Completo US$ 19.90) |
| `/upsell` | `upsell.html` | Oferta pós-compra (Kit Completo para Cultos, $27) com o widget de funil da Hotmart |
| `/downsell` | `downsell.html` | Oferta de última chance ($17) com o widget de funil da Hotmart |
| `/obrigado` | `obrigado.html` | Página de obrigado |

## Onde mexer

- **Checkout (Cakto, em USD):** atributo `data-checkout` dos botões em `index.html` — Básico `pay.cakto.com.br/38yugnu_1361629`, Completo `pay.cakto.com.br/3cdei5b`. O `js/app.js` repassa as UTMs da URL para o checkout.
- **Preços:** procurar por `US$` em `index.html`. O valor cobrado é o da oferta configurada na Cakto; os dois precisam bater.
- **Perguntas frequentes:** lista `window.PB_FAQ` no fim de `index.html`.
- **Pixel/UTMs:** scripts da Utmizey no `<head>` de cada página.
- **Imagens:** pasta `img/` (mesmos nomes e tamanhos ao trocar).

## Publicação

O `vercel.json` publica a pasta como site estático, com URLs sem `.html` (`/upsell`, `/downsell`, `/obrigado`).

Para ver no computador: `python -m http.server` nesta pasta e abrir `http://localhost:8000`.
