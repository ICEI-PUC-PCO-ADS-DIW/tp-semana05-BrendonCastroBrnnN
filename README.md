[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/KZhXwLZL)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=20649945)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Brendon Guilherme Castro
- Matricula: 897493
- Proposta de projeto escolhida: Site de Viagens - Próximo Destino
- Breve descrição sobre seu projeto: Site com ideias de lugares para viajar, com fotos e breve descrição dos lugares indicados.

## Print da Home-Page

![Home-page1](.img/homepage1.png)
![Home-page2](.img/homepage2.png)

## Print da página de detalhes do item

![Detalhes Rio](.img/pagedetalhesrio.png)
![Detalhes Paris](.img/pagedetalhesparis.png)
![Detalhes New York](.img/pagedetalhesny.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
[
  {
    "id": 1,
    "titulo": "Rio de Janeiro",
    "descricao": "Cidade maravilhosa com praias incríveis.",
    "imagem": "./img/rio.jpg"
  },
  {
    "id": 2,
    "titulo": "Paris",
    "descricao": "A capital da França, famosa pela Torre Eiffel.",
    "imagem": "./img/paris.jpg"
  },
  {
    "id": 3,
    "titulo": "Nova York",
    "descricao": "A cidade que nunca dorme.",
    "imagem": "./img/ny.jpg"
  }
]
```