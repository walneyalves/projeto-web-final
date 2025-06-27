const API_KEY = "3dc71ba23b0e786b1a1852d94b01d544";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const LANGUAGE = "pt-BR";

const filmesContainer = document.getElementById("filmes");

function buscarFilmesPopulares() {
  fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
    .then(response => response.json())
    .then(data => {
      mostrarFilmes(data.results);
    })
    .catch(error => {
      console.error("Erro ao buscar filmes:", error);
      filmesContainer.innerHTML = "<p>Erro ao carregar os filmes. Tente novamente mais tarde.</p>";
    });
}

function mostrarFilmes(filmes) {
  filmesContainer.innerHTML = "";

  filmes.forEach(filme => {
    const div = document.createElement("div");
    div.classList.add("card");

    const imagem = filme.poster_path
      ? `${IMG_URL}${filme.poster_path}`
      : "https://via.placeholder.com/200x300?text=Sem+Imagem";

    div.innerHTML = `
      <img src="${imagem}" alt="${filme.title}">
      <h3>${filme.title}</h3>
      <p>⭐ ${filme.vote_average}</p>
    `;

    filmesContainer.appendChild(div);
  });
}

// Iniciar busca
buscarFilmesPopulares();
