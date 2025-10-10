// js/app.js

// Importa a função responsável por carregar páginas dinamicamente
import { loadPage } from "./router.js";

/**
 * Inicia o sistema de rotas da SPA (Single Page Application)
 * - Carrega a rota inicial com base no hash da URL
 * - Escuta mudanças no hash para atualizar o conteúdo sem recarregar a página
 */
function initRouter() {
  // Define a rota inicial (usa "home" se não houver hash)
  const route = location.hash.slice(1) || "home";
  loadPage(route);

  // Atualiza a página quando o hash da URL muda
  window.addEventListener("hashchange", () => {
    const newRoute = location.hash.slice(1);
    loadPage(newRoute);
  });
}

// Executa o roteador após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", initRouter);
