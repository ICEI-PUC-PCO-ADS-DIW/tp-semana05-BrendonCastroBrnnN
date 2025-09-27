const destinos = [
  {
    id: 1,
    titulo: "Rio de Janeiro",
    descricao: "Cidade maravilhosa com praias incríveis.",
    imagem: "./img/rio.jpg"
  },
  {
    id: 2,
    titulo: "Paris",
    descricao: "A capital da França, famosa pela Torre Eiffel.",
    imagem: "./img/paris.jpg"
  },
  {
    id: 3,
    titulo: "Nova York",
    descricao: "A cidade que nunca dorme.",
    imagem: "./img/ny.jpg"
  }
];

const container = document.getElementById("cards-container");

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

