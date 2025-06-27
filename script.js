// Função chamada ao clicar no botão "Buscar"
function buscarFilmes() {
  const query = document.getElementById("searchInput").value;

  // URL da API OMDb (lembre-se de usar sua própria API KEY)
  const url = `https://www.omdbapi.com/?apikey=SEU_TOKEN&s=${query}`;

  // Faz a requisição à API
  fetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
      if (dados.Response === "True") {
        mostrarFilmes(dados.Search); // Exibe os filmes
      } else {
        alert("Nenhum filme encontrado.");
      }
    })
    .catch(erro => {
      console.error("Erro ao buscar filmes:", erro);
    });
}

// Função para exibir os filmes retornados
function mostrarFilmes(lista) {
  const container = document.getElementById("filmeContainer");
  container.innerHTML = ""; // Limpa a tela antes de exibir novos resultados

  lista.forEach(filme => {
    const div = document.createElement("div");
    div.className = "card";

    // Link dinâmico de busca do trailer no Google
    const linkTrailer = `https://www.google.com/search?q=${encodeURIComponent(filme.Title + " trailer")}`;

    // Monta o conteúdo do card
    div.innerHTML = `
      <img src="${filme.Poster}" alt="${filme.Title}">
      <h3>${filme.Title}</h3>
      <a href="${linkTrailer}" target="_blank">🎬 Ver trailer</a>
    `;

    container.appendChild(div); // Adiciona o card ao container
  });
}