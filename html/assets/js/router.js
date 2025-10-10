// js/router.js

// Função que carrega o conteúdo da página com base na rota
export function loadPage(route) {
  // Define o caminho do arquivo HTML dentro da pasta "pages"
  const path = `./pages/${route}.html`;

  // Busca o conteúdo da página e insere no <div id="app">
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error("Página não encontrada");
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("app").innerHTML = html;
    })
    .catch(error => {
      document.getElementById("app").innerHTML = `<h2>Erro: Página "${route}" não encontrada.</h2>`;
    });
}
