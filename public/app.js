const destinos = [
  { id: 1, titulo: "Rio de Janeiro", descricao: "Cidade maravilhosa com praias incríveis.", imagem: "./img/rio.jpg" },
  { id: 2, titulo: "Paris", descricao: "A capital da França, famosa pela Torre Eiffel.", imagem: "./img/paris.jpg" },
  { id: 3, titulo: "Nova York", descricao: "A cidade que nunca dorme.", imagem: "./img/ny.jpg" }
];

function renderCards() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  container.innerHTML = "";

  destinos.forEach(destino => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${destino.imagem}" alt="${destino.titulo}">
      <h3>${destino.titulo}</h3>
      <p>${destino.descricao}</p>
      <a href="detalhes.html?id=${destino.id}">Ver detalhes</a>
    `;

    container.appendChild(card);
  });
}

function renderDetails() {
  const container = document.getElementById("detalhes-container");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  if (!idParam) {
    container.innerHTML = `<p>Id não informado. <a href="index.html">Voltar</a></p>`;
    return;
  }

  const id = Number(idParam);
  const destino = destinos.find(d => d.id === id);

  if (!destino) {
    container.innerHTML = `<p>Destino não encontrado. <a href="index.html">Voltar</a></p>`;
    return;
  }

  container.innerHTML = `
    <h2>${destino.titulo}</h2>
    <img src="${destino.imagem}" alt="${destino.titulo}" style="max-width:100%;height:auto;border-radius:8px;">
    <p>${destino.descricao}</p>
    <a href="index.html">Voltar</a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  renderDetails();
});
